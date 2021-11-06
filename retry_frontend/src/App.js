import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import Slide from './slide/Slide';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/promises" component={Slide} />
    </>
  );
};

export default App;
