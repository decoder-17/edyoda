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
    <>
      <Router>
        <Header />
        <Sidebar />
        <Chat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module" element={<Module />} />
          <Route path="/instructor" element={<Instructor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
