from gensim import models
from konlpy.tag import Okt
import os
import sys


def promiseFilter(promise_list, keyword, threshold=0.42):
    """Filtering promises by given keyword. Implemented by FastText algorithm.

    Args:
        promise_list (list): List of promise strings.
        keyword (string): Filtering keyword.
        threshold (float, optional): Threshold value for similarity score. Defaults to 0.42.

    Returns:
        (list): Returns list of filtered(relevant to keyword) promises. 
    """
    # * initial settings
    #! too slow to load model
    # TODO develop load-only function or made this function to be called only once
    okt = Okt()
    model = models.fasttext.load_facebook_vectors(
        os.path.abspath(os.path.dirname(__file__)) + "/model/ko.bin"
    )
    return_list = []

    processed_list = [okt.nouns(promise["contents"]) for promise in promise_list]

    for item in processed_list:
        if item != []:
            score = max([model.similarity(keyword, noun) for noun in item])
            if score > threshold:
                return_list.append(promise_list[processed_list.index(item)])
    return return_list


# if __name__ == '__main__':
# 	with open('./test/description.txt') as f:
# 		test_list = f.read().split('\n')
# 	promiseFilter(test_list, '취업')
