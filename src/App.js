import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Contactme from "./pages/Contactme";
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/contactme" element={<Contactme />} />
    </Routes>
    </>
  );
}

export default App;
