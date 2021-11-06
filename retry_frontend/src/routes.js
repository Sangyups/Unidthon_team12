import React from 'react';
//
import { Link, Route, Routes } from 'react-router-dom';

//
import Home from './home/home';
import Slide from './slide/Slide';

export default function Router() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link t0="/slides">Slide</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/slides" component={Slide}/>
      </Routes>
    </div>
  )
}