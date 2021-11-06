import React from 'react';

const Card = (props) => {
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
            <span>{props.title}</span>
          </div>

          <div className="info">
            <img src="img/test1.jpg" className="candidate"></img>
            <img src="img/test2.jpg" className="logo"></img>
            <span className="partyName">{props.name}</span>
            <span className="name">{props.party}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
