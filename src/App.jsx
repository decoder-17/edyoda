// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Module from "./pages/Module";
import Home from "./pages/Home";
import Instructor from "./pages/Instructor";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="island">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/module" element={<Module />} />
              <Route path="/instructor" element={<Instructor />} />
            </Routes>
          </div>
        </div>
        <Chat />
      </Router>
    </div>
  );
}

export default App;
