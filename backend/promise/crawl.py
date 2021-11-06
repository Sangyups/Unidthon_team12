import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import requests
import os, sys

load_dotenv(verbose=True)
NAVER_CLIENT_ID = os.getenv("NAVER_CLIENT_ID")
NAVER_CLIENT_SECRET = os.getenv("NAVER_CLIENT_SECRET")

sys.path.append(
    os.path.dirname(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
)
from algorithm import keyword


def get_news_contents(url):
    article = None
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    if "news.naver.com" in response.url:
        soup = BeautifulSoup(response.text)
        article = soup.select_one("div#articleBodyContents").text.strip()
        article = article.replace(
            "// flash 오류를 우회하기 위한 함수 추가\nfunction _flash_removeCallback() {}", ""
        )
    return article


def get_naver_news(search):
    url = "https://openapi.naver.com/v1/search/news.json"
    headers = {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    }
    params = {"query": search, "display": 30, "sort": "sim"}
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
        content = get_news_contents(link)
        if content:
            articles.append(content)
        descriptions.append(description)
    return keyword.keywordExtractor(articles)
