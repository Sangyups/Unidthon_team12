import requests
from bs4 import BeautifulSoup


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
