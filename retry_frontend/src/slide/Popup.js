import React from 'react';
import './Popup.css';

const Popup = (props) => {
  if (props.trigger === 0) return '';
  return props.trigger === 1 ? (
    <div className="popup">
      <div className="container">
        <button className="close-btn" onClick={() => props.setTrigger(0)}>
          X
        </button>

        <h1>공유하기</h1>
        <br />

        <h2>후보자의 정보를 공유해보세요</h2>

        <div className="group">
          <a href="#">
            <img src="img/instagram.png"></img>
          </a>
          <a href="#">
            <img src="img/facebook.png"></img>
          </a>
          <h3>Instagram</h3>
          <h3>Facebook</h3>
          <a href="#">
            <img src="img/kakao.png"></img>
          </a>
          <a href="#">
            <img src="img/link.png"></img>
          </a>
          <h3>Kakao Talk</h3>
          <h3>Link</h3>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    <div className="popup">
      <div className="container">
        <button className="close-btn" onClick={() => props.setTrigger(0)}>
          X
        </button>

        <h1>저장 완료</h1>
        <br />

        <h2>↓ 지금까지 저장한 후보자들의 정보 내보내기 ↓</h2>

        <div className="group">
          <a href="#">
            <img src="img/picture.png"></img>
          </a>
          <a href="#">
            <img src="img/pdf.png"></img>
          </a>
          <h3>사진첩에 저장</h3>
          <h3>PDF 생성</h3>
          <a href="#">
            <img src="img/print.png"></img>
          </a>
          <a href="#">
            <img src="img/link.png"></img>
          </a>
          <h3>프린트</h3>
          <h3>Link</h3>
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default Popup;
