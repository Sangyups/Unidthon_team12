from rest_framework.views import APIView
from rest_framework.response import Response
from promise import serializers

from promise.models import Promises
from promise.serializers import PromisesSerializer

from datetime import datetime
from pytz import timezone

from promise import crawl

# Create your views here.
# http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire?serviceKey=ipudQMv%2Fc9OkEQxz%2FNbnsRrwTdIbcIrRXhXBFdzahDf9XIEGEji%2Bko%2BmUpQh233w%2B4hWhmpu%2B0Hg6pMS0q0GRQ%3D%3D&sgId=20170509&sgTypecode=1&cnddtId=100120965.json


# naver new search
# https://openapi.naver.com/v1/search/news.json

from dotenv import load_dotenv
import requests
import os
import json
import xmltodict

load_dotenv(verbose=True)
DATA_PORTAL_KEY = os.getenv("DATA_PORTAL_KEY")
NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")


class PromiseView(APIView):
    def get(self, request, format=None):
        # url = "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire"
        # params = {
        #     "ServiceKey": DATA_PORTAL_KEY,
        #     "sgId": "20170509",  # 선거 id (날짜)
        #     "sgTypecode": "1",  # 선거 type
        #     "cnddtId": "100120965",  # 선거자 id
        #     "resultType": "json",
        #     "numOfRows": 30,
        # }
        # response = requests.get(url, params=params)

        url = "https://openapi.naver.com/v1/search/news.json"
        headers = {
            "X-Naver-Client-Id": NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        }
        params = {"query": "청년 공약", "display": 30, "sort": "sim"}
        response = requests.get(url, headers=headers, params=params)
        results = response.json()
        items = results["items"]
        news_link = []
        articles = []
        descriptions = []
        for item in items:
            link = item["link"]
            description = item["description"]
            news_link.append(link)
            content = crawl.get_news_contents(link)
            if content:
                articles.append(content)
            descriptions.append(description)
        # for link in news_link:
        #     print(link)
        return Response({"article": articles})
        # return Response(json.loads(response.content))


class AdminView(APIView):
    def get(self, request, format=None):

        data = Promises.objects.all()
        data.delete()

        url = "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList"
        params = {
            "ServiceKey": DATA_PORTAL_KEY,
            "pageNo": 1,
            "numOfRows": 1000,
            "resultType": "json",
        }
        response = requests.get(url, params=params)
        results = json.loads(response.content)["getCommonSgCodeList"]["item"]

        dt = datetime.now(timezone("UTC"))
        KST = timezone("Asia/Seoul")
        dt_korea = dt.astimezone(KST)

        cur_date = dt_korea.strftime("%Y%m%d")

        elections = []
        candidates = []
        for election in results:
            if election["SG_TYPECODE"] == "1":
                elections.append(election)

        for election in elections:
            url = "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire"
            params = {
                "ServiceKey": DATA_PORTAL_KEY,
                "pageNo": 1,
                "numOfRows": 1000,
                "sgId": election["SG_ID"],
                "sgTypecode": election["SG_TYPECODE"],
                "resultType": "json",
            }

            response = requests.get(url, params=params)
            # print(response.content)
            # dict_data = xmltodict.parse(response.content)
            # print(json.loads(json.dumps(dict_data)))
            # xml_dict = json.loads(json.dumps(dict_data))["response"]["body"]["items"][
            #     "item"
            # ]

            try:
                xml_dict = json.loads(response.content)[
                    "getPofelcddRegistSttusInfoInqire"
                ]["item"]
                for candidate in xml_dict:
                    candidates.append(candidate)
            except:
                pass

            # print(json.loads(response.content))

        for candidate in candidates:
            url = "http://apis.data.go.kr/9760000/PartyPlcInfoInqireService/getPartyPlcInfoInqire"
            params = {
                "ServiceKey": DATA_PORTAL_KEY,
                "pageNo": 1,
                "numOfRows": 1000,
                "sgId": candidate["SG_ID"],
                "partyName": candidate["JD_NAME"],
                "resultType": "json",
            }
            response = requests.get(url, params=params)
            try:
                items = json.loads(response.content)["getPartyPlcInfoInqire"]["item"][0]
            except:
                pass

            i = 1
            while True:
                promises = {}
                try:
                    promises["contents"] = items["prmmCont{}".format(i)]
                    promises["realm"] = items["prmsRealmName{}".format(i)]
                    promises["title"] = items["prmsTitle{}".format(i)]
                    promises["party"] = candidate["JD_NAME"]
                    promises["candidate"] = candidate["NAME"]
                    promises["vote_date"] = candidate["SG_ID"]
                except:
                    break

                serializer = serializers.PromisesSerializer(data=promises)
                if serializer.is_valid():
                    serializer.save()
                else:
                    print(serializer.errors)
                print(i)
                i += 1

        return Response({"status": "done"})


# -> 선거정보 -> 후보자 -> 공약
