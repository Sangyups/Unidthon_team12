from django.db.models import query
from django.http import response
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response

from promise.models import Elections
from promise.models import Candidates
from promise.models import Promises

import promise.crawl

# Create your views here.
# http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire?serviceKey=ipudQMv%2Fc9OkEQxz%2FNbnsRrwTdIbcIrRXhXBFdzahDf9XIEGEji%2Bko%2BmUpQh233w%2B4hWhmpu%2B0Hg6pMS0q0GRQ%3D%3D&sgId=20170509&sgTypecode=1&cnddtId=100120965.json


# naver new search
# https://openapi.naver.com/v1/search/news.json

from dotenv import load_dotenv
import requests
import os
import json

load_dotenv(verbose=True)
DATA_PORTAL_KEY = os.getenv("DATA_PORTAL_KEY")
NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")


class PromiseView(APIView):
    def get(self, request, format=None):
        url = "http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire"
        params = {
            "ServiceKey": DATA_PORTAL_KEY,
            "sgId": "20170509",  # 선거 id (날짜)
            "sgTypecode": "1",  # 선거 type
            "cnddtId": "100120965",  # 선거자 id
            "resultType": "json",
            "numOfRows": 30,
        }
        response = requests.get(url, params=params)

        # url = "https://openapi.naver.com/v1/search/news.json"
        # headers = {
        #     "X-Naver-Client-Id": NAVER_CLIENT_ID,
        #     "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        # }
        # params = {"query": "대학생 정책", "display": 30}
        # response = requests.get(url, headers=headers, params=params)
        # results = response.json()
        # items = results["items"]
        # news_link = []
        # articles = []
        # for item in items:
        #     link = item["link"]
        #     news_link.append(link)
        #     content = crawl.get_news_contents(link)
        #     if content:
        #         articles.append(content)
        # for link in news_link:
        #     print(link)
        # return Response({"article": articles})
        return Response(json.loads(response.content))


class AdminView(APIView):
    def get(self, request, format=None):
        url = "http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList"
        params = {
            "ServiceKey": DATA_PORTAL_KEY,
            "pageNo": 1,
            "numOfRows": 1000,
            "resultType": "json",
        }
        response = requests.get(url, params=params)
        results = json.loads(response.content)

        return Response(results["getCommonSgCodeList"]["item"])


# -> 선거정보 -> 후보자 -> 공약
