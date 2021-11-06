import { height } from '@mui/system';
import React from 'react';
import { useState } from 'react';

import './Card.css';

const Card = ({ name, party, title, contents }) => {
  return (
    <div className="card">
      <div
        className="container"

        style={{ width: props.width, height: props.height }}
      >
        <nav className="menu">
          <a href="#" onClick={() => props.setTrigger(1)}>
            <img src="img/share.png" alt="share"></img>
          </a>
          <a href="#" onClick={() => props.setTrigger(2)}>
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
