import React from 'react';
import './Popup.css';

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="container">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
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
    ''
  );
};

export default Popup;
