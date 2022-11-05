import React from 'react';
import './style.css';
import './buttons.css'
import { Routes, Route, Link } from 'react-router-dom';
import Count from './Counter';
import ErrorPage from './pages/FourZeroFour';
import Reducer from './hooks/useReducer';
import ErrorBoundary from './pages/ErrorBoundary'
import Home from './HomePage'




export default function App() {
  return (
    <div>
    
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/counter' element={<Count />} />
        <Route path = '*' element = {<ErrorPage/>}/>
        <Route path = '/use+reducer' element = {<Reducer/>}/>
        <Route path = '/error+boundary' element = {<ErrorBoundary/>}/>
      </Routes>
      
    </div>
  );
}
