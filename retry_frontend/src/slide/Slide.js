import React, { useState, useEffect, useRef } from 'react';
import Card from '../card/Card';
import Slider from 'react-slick';
import Popup from '../slide/Popup'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 5% auto;
  width: 50vw;
  height: 80vh;
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    font-size: 40px;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    font-size: 40px;
  }
`;

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
  };

  // 공유하기 버튼을 위한 state
  const [buttonPopup, setButtonPopup] = React.useState(0);

  return (
    <Wrap>
      <Slider {...settings}>
        <Card setTrigger={setButtonPopup} />
        <Card setTrigger={setButtonPopup} />
        <Card setTrigger={setButtonPopup} />
        <Card setTrigger={setButtonPopup} />
        <Card setTrigger={setButtonPopup} />
        <Card setTrigger={setButtonPopup} />
      </Slider>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </Wrap>
  );
};

export default Slide;
