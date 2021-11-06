import React from 'react';
import ReactDOM from 'react-dom';

// for dev
// import './index.css';

import Slide from './slide/Slide';
import Card from './card/Card';
import Home from './home/home';

import reportWebVitals from './reportWebVitals';

// import Loading from './loading/Loading';

ReactDOM.render(
  <React.StrictMode>
    {/* <Loading /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
