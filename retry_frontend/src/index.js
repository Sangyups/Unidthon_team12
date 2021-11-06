// for dev
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from './reportWebVitals';

// import Loading from './loading/Loading';

import { Router, Route, Link } from 'react-router-dom';
import history from './history';
import Home from './home/home';
import Slide from './slide/Slide';

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <Slide />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
