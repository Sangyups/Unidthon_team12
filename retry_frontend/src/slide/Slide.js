<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import Card from '../card/Card';
import Slider from 'react-slick';
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

  return (
    <Wrap>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </Wrap>
  );
};

export default Slide;
=======
import React, { Component } from 'react';
import { useState } from 'react';
import "./Slide.css";
import Card from "../card/Card";
import Popup from './Popup';

const Slide = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const check = index => setSelectedIndex(index);

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="slide">

            <div className="container">

                <button className="btn" onClick={checkNext} >{'<'}</button>

                <div className="pannel">
                    <section id="slider">
                        <input
                            type="radio"
                            name="slider"
                            id="s1"
                            checked={selectedIndex === 0}
                            onClick={() => check(0)}
                        />
                        <input
                            type="radio"
                            name="slider"
                            id="s2"
                            checked={selectedIndex === 1}
                            onClick={() => check(1)}
                        />
                        <input
                            type="radio"
                            name="slider"
                            id="s3"
                            checked={selectedIndex === 2}
                            onClick={() => check(2)}
                        />

                        <label htmlFor="s1" id="slide1">
                            <Card height="100%" width="100%" setTrigger={setButtonPopup} />
                        </label>
                        <label htmlFor="s2" id="slide2">

                        </label>
                        <label htmlFor="s3" id="slide3">

                        </label>
                    </section>

                </div>

                <button className="btn" onClick={checkNext}>{'>'}</button>

            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />

        </div>
    )
}

export default Slide
>>>>>>> 50645d87285c89f682a0558bdd2d91b00a20dc6c
