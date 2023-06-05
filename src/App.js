import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Contactme from "./pages/Contactme";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<Contactme />} />
    </Routes>
    </>
  );
}

export default App;
