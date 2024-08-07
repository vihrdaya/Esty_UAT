// import { useState } from "react";
import "./styles/App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
const App: React.FC = () => {
  return (
    <div>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Balls</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
