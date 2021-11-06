import { height } from '@mui/system';
import React from 'react';
import { useState } from 'react';

import './Card.css';

const Card = ({ name, party, title, contents, props }) => { //!여기 props 없으니까 에러발생하던데
  return (
    <div className="card">
      <div
        className="container"

        style={{ width: props.width, height: props.height }}
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
            <span>{title}</span>
          </div>

          <div className="info">
            <img
              src={`img/${name}.jpg`}
              alt="candidate"
              className="candidate"
            ></img>
            <img src={`img/${party}.jpg`} alt="party" className="logo"></img>
            <span className="partyName">{party}</span>
            <span className="name">{name}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
