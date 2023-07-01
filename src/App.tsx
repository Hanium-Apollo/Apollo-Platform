import React from 'react';
import './App.css';
import Main from './pages/MainPage/MainPage';
import Success from './pages/ResultPage/SuccessPage';
import Fail from './pages/ResultPage/FailPage';
import Nav from './pages/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NightSky from './pages/MainPage/NightSky';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/fail" element={<Fail />}></Route>
        </Routes>
        <NightSky />
      </BrowserRouter>
    </div>
  );
}

export default App;
