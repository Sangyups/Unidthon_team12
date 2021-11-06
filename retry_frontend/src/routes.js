//
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

//
import Home from './home/home';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" component={Home}/>  
      </Routes>
    </BrowserRouter>
  )
}