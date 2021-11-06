import { height } from '@mui/system';
import React from 'react';
<<<<<<< HEAD
import './Card.css';
=======
import { useState } from 'react';
import "./Card.css";
>>>>>>> 50645d87285c89f682a0558bdd2d91b00a20dc6c


const Card = (props) => {
<<<<<<< HEAD
  return (
    <div className="card">
      <div
        className="container"
        // style={{ width: props.width, height: props.height }}
      >
        <nav className="menu">
          <a href="#">
            <img src="img/share.png" alt="share"></img>
          </a>
          <a href="#">
            <img src="img/bookmark.png" alt="bookmark"></img>
          </a>
        </nav>

        <section>
          <div className="promise">
            <span>
              "청년 일자리를
              <br /> 창출하겠습니다"
            </span>
          </div>

          <div className="info">
            <img src="img/test1.jpg" className="candidate"></img>
            <img src="img/test2.jpg" className="logo"></img>
            <span className="partyName">더불어민주당</span>
            <span className="name">홍길동</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
=======

    return (
        <div className="card">

            <div className="container" style={{ width: props.width, height: props.height }}>

                <nav className="menu">
                    <a href="#" onClick={() => props.setTrigger(true)}><img src="img/share.png" alt="share"></img></a>
                    <a href="#"><img src="img/bookmark.png" alt="bookmark"></img></a>
                </nav>

                <section>
                    <div className="promise">
                        <span>"청년 일자리를<br /> 창출하겠습니다"</span>
                    </div>

                    <div className="info">
                        <img src="img/test1.jpg" className="candidate"></img>
                        <img src="img/test2.jpg" className="logo"></img>
                        <span className="partyName">더불어민주당</span>
                        <span className="name">홍길동</span>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default Card

>>>>>>> 50645d87285c89f682a0558bdd2d91b00a20dc6c
