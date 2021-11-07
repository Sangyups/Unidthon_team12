# Hackathon_team12

대부분의 사람들이 대학생 때 처음으로 투표를 시작합니다. 자신의 투표권을 행사하고 싶지만 아직 정치에 대해 잘 모르는 대학생들을 위해 대학생 맞춤 공약들을 따로 골라줍니다. 누굴 뽑아야할지 스스로 고민하고 선택할 수 있게 만들어주는 어플리케이션입니다.

## Backend

### How To Install

```bash
git clone https://github.com/Unidthon/Hackathon_team12.git
cd Hackathon_team12/backend
current directory에 .env 파일 저장
pip3 install -r requirements.txt
python manage.py runserver
```

.env 파일 링크 = https://koreaoffice-my.sharepoint.com/:u:/g/personal/qwerty97532_korea_edu/EehW9E3bN0FGnfuKcGa1Un0BVtUTGc5ddrW5WCCTxXF7RQ?e=4QxfaC

### How to use

`GET /api/keywords/`: 현재 가장 핫한 키워드를 가져옵니다.
`GET /api/promise/?keyword={keyword}`: 원하는 키워드를 통하여 해당 키워드와 비슷한 유형의 공약들을 필터링해서 후보별로 갖고 옵니다.
`GET /api/admin/`: admin 권한으로 실행 가능하며 새로운 선거에 맞춰 DB를 갱신합니다.

## Frontend

### How To Install

```bash
cd Hackathon_team12/frontend
npm install
npm start
```

### Mainly Used Framework

React
Django

### Directory

- frontend
  : 처음 프론트엔드 개발 환경 디렉토리로써 리액트까지 설치했으나 템플릿 사용을 위해 다음 디렉토리로 넘어감.

- material-kit-react-main
  : 템플릿 사용을 위해 클론해서 개발을 진행한 디렉토리이나 불필요한 요소가 많고 최신 문법을 사용하여 수정하기 어렵다는 의견에 따라 다음 디렉토리로 넘어감.

- retry_frontend
  : 프론트엔드의 메인 디렉토리로, 템플릿 코드에서 필요한 부분만을 가져와서 개발을 시작.
  - src
    - App.js
      : Router 설정을 위한 파일이다.
    - index.js
      : React.DOM이 render된 곳이다.
    - card
      : 선택한 키워드에 따른 후보자들을 카드 형식으로 나타내었다.
      - Card.js
      - Detail.js
    - home
      : 메인 화면을 구성한다.
    - loading
      : 사용자가 보고자 하는 키워드를 눌렀을 때 데이터를 처리하는 동안 보여질 화면이다.
    - slide
      : 후보자 card들을 슬라이드하여 볼 수 있도록 구성하였다.
      - Slide.js
        : Card.js 컴포넌트를 이용하여 슬라이드 형식을 구현하였다.
      - Popup.js
        : 사용자가 관심 있는 후보 정보를 저장 및 공유할 수 있도록 state와 props를 사용하여 팝업 페이지를 연결하였다.
    - styles
      - fonts.css
        : home.js에서 사용할 웹 폰트를 위한 파일이다.
  - public
    - img
      : 아이콘, 이미지, 후보자 더미 이미지 저장소이다.
