import React, { Component } from 'react';
import "./styles/Slide.css";
import Card from "./Card";


const Slide = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const check = index => setSelectedIndex(index);
    return (
        <div className="slideoooooooo">
            <div className="container">

                <div className="prev-btn">
                    <button onClick={checkNext}>{'<'}</button>
                </div>

                <div className="pannel-container">

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
                            {/* <Card /> */}
                            {/* <img className="fea" src="https://picsum.photos/200/200" height="100%" width="100%" /> */}
                        </label>
                        <label htmlFor="s2" id="slide2">
                            <Card height="50%" width="100%" />
                            {/* <img className="fea" src="https://picsum.photos/200/300" height="100%" width="100%" /> */}
                        </label>
                        <label htmlFor="s3" id="slide3">
                            {/* <Card /> */}
                            {/* <img className="fea" src="https://picsum.photos/300/300" height="100%" width="100%" /> */}
                        </label>
                    </section>

                </div>

                <div className="next-btn">
                    <button onClick={checkNext}>{'>'}</button>
                </div>

            </div>
        </div>
    )
}

export default Slide
