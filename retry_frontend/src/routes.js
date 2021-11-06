import React from 'react';
//
import { HashRouter, Route } from 'react-router-dom';

//
import Home from './home/home';
import Slide from './slide/Slide';

export default function Router() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/promises" component={Slide} />
    </HashRouter>
  );
}
