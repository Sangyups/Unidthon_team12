import React, { Component } from 'react';
import "./Slide.css";
import Card from "../card/Card";


const Slide = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const check = index => setSelectedIndex(index);
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
                            <Card height="100%" width="100%" />
                        </label>
                        <label htmlFor="s2" id="slide2">

                        </label>
                        <label htmlFor="s3" id="slide3">

                        </label>
                    </section>

                </div>

                <button className="btn" onClick={checkNext}>{'>'}</button>

            </div>
        </div>
    )
}

export default Slide
