# Algorithm - WordRank & FastText
____
**by Jinmo Kim**   

## Environment
- Python 3.9
- ```gensim```, ```konlpy```, ```krwordrank```  
- More information about libary - ```requirements.txt```
  
  
## Pre-trained Model (FastText)
Download in [here](https://www.dropbox.com/s/stt4y0zcp2c0iyb/ko.tar.gz?dl=0). - [Reference Repository](https://github.com/Kyubyong/wordvectors)


## Directory Structure
```
algorithm ┬── model
          │   └── ko.bin
		  ├── test
		  │   ├── test.txt
  		  │   ├── articles.txt
		  │   ├── articles-2.txt
		  │   └── description.txt 
		  ├── keyword.py
		  ├── similarity.py
		  ├── stopwords.txt
		  ├── requirements.txt 
		  └── README.md
```