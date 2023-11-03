/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HookUseContext } from './components/HookUseContext';
// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;