import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="container">
        <div className="inner">
          <div>
            <div>
              <img src="img/sprout.png"></img>
            </div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <span>Loading...</span>
    </div>
  );
};

export default Loading;
