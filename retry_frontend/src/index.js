import React from 'react';
import ReactDOM from 'react-dom';

// for dev
// import './index.css';

import Slide from './slide/Slide';
import Card from './card/Card';
import Router from './routes';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import Loading from './loading/Loading';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
