from gensim import models
from konlpy.tag import Okt

def promiseFilter(promise_list, keyword, threshold=0.42):
	#* initial settings
	#! too slow to load model
	#TODO develop load-only function or made this function to be called only once
	okt = Okt()
	model = models.fasttext.load_facebook_vectors('./model/ko.bin')
	return_list = []

	processed_list = [okt.nouns(promise) for promise in promise_list]

	for item in processed_list:
		if item != []:
			score = max([model.similarity(keyword, noun) for noun in item])
			print(score)
			if score > threshold: 
				return_list.append(promise_list[processed_list.index(item)])
	
	print(return_list)
	return return_list

if __name__ == '__main__':
	with open('./test/description.txt') as f:
		test_list = f.read().split('\n')
	promiseFilter(test_list, '취업')
