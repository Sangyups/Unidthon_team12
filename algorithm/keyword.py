from krwordrank.word import summarize_with_keywords
from konlpy.tag import Okt
import os, sys


def keywordExtractor(news_list, num_keywords=10):
    """Keyword Extractor from list of news. Implemented by WordRank algorithm.

    Args:
        news_list (list): List of news strings.
        num_keywords (int, optional): Number of keywords which is 

    Returns:
        (list): List of keywords, returns 10 keywords in default.
    """
    # * initial settings
    min_count = 3
    max_length = 10
    beta = 0.85
    max_iter = 10
    okt = Okt()

    # * preprocessed news list
    news_corpus = []

    # * load stopwords
    with open(os.path.abspath(os.path.dirname(__file__)) + "/stopwords.txt") as f:
        stopwords = f.read().splitlines()

    # * preprocessing (noun extraction)
    for news in news_list:
        news_corpus.append(" ".join(okt.nouns(news)))

    # * extract keywords from news text
    keywords = summarize_with_keywords(
        news_corpus, num_keywords, stopwords, min_count, max_length, beta, max_iter
    )
    print(keywords)

    keywords_list = list(keywords)
    print(keywords_list)
    return keywords_list


# if __name__ == '__main__':
# 	test_list = []
# 	with open('./test/articles-2.txt') as f:
# 		test_list.append(f.read())

# 	keywordExtractor(test_list)
