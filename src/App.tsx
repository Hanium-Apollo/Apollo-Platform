import React from 'react';
import './App.css';
import Main from './pages/MainPage/MainPage';
import Success from './pages/ResultPage/SuccessPage';
import Fail from './pages/ResultPage/FailPage';
import Nav from './pages/Nav/Nav'
import Monitor from './pages/Monitoring/Monitor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NightSky from './pages/MainPage/NightSky';
import Rendering from './pages/RenderingPage/RenderingPage';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/fail" element={<Fail />}></Route>
          <Route path="/monitor" element={<Monitor />}></Route>
          <Route path="/rendering" element={<Rendering />}></Route>
        </Routes>
        <NightSky />
      </BrowserRouter>
    </div>
  );
}

export default App;
