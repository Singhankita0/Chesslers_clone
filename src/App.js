import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import LeaderBoard from "./components/LeaderBoard";
// import './App.css';

function App() {
  return (
    <div className="bg-black">
      <div className="image">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
