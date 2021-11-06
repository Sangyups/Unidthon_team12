from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.authentication import BasicAuthentication

from promise import serializers, crawl
from promise.models import Promises, Candidates
from promise.serializers import PromisesSerializer, CandidatesSerializer
from datetime import datetime
from pytz import timezone

from dotenv import load_dotenv
import requests, os, json, sys

sys.path.append(
    os.path.dirname(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
)
from algorithm import similarity

load_dotenv(verbose=True)
DATA_PORTAL_KEY = os.getenv("DATA_PORTAL_KEY")


class KeywordsView(APIView):
    def get(self, request, format=None):
        search_list = ["주택", "취업", "교육", "진로"]
        keywords = []
        for search in search_list:
            keyword = crawl.get_naver_news(search)
            for i in keyword:
                keywords.append(i)

        return Response({"keywords": keywords})


class PromiseView(APIView):
    def get(self, request, format=None):
        candidates = Candidates.objects.all()
        serializer = CandidatesSerializer(candidates, many=True)
        keyword = request.GET["keyword"]
        results = []
        for candidate in serializer.data:
            res = {}
            res["name"] = candidate["name"]
            res["party"] = candidate["party"]
            filter_list = similarity.promiseFilter(candidate["promises"], keyword)
            keys = ["realm", "title", "contents"]
            res["promises"] = []
            for item in filter_list:
                res["promises"].append({key: item[key] for key in keys})
            results.append(res)
        return Response(results)


class AdminView(APIView):

    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAdminUser]

    def get(self, request, format=None):
        data = Promises.objects.all()
        data.delete()
        data = Candidates.objects.all()
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
        # print(results)
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
            try:
                xml_dict = json.loads(response.content)[
                    "getPofelcddRegistSttusInfoInqire"
                ]["item"]
                p = {}
                for candidate in xml_dict:
                    p["hubo_id"] = candidate["HUBOID"]
                    p["name"] = candidate["NAME"]
                    p["party"] = candidate["JD_NAME"]
                    serializer = serializers.CandidatesSerializer(data=p)
                    if serializer.is_valid():
                        serializer.save()
                        candidates.append(candidate)
                    else:
                        print(serializer.errors)
            except:
                pass

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
                    promises["vote_date"] = candidate["SG_ID"]
                    promises["written_by"] = candidate["HUBOID"]
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
