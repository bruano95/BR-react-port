import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);
  return (
    <div className="logo">
        <Link to="/">
            <h1>Bruano</h1>
        </Link>
        <ul className= {click ? "navOptions active" : "navOptions"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/aboutme">About Me</Link>
            </li>
            <li>
                <Link to="/contactme">Contact Me</Link>
            </li>
        </ul>
        <div className="navham" onClick={clickHandler}>
            {click ? (
            <FaBars size={20} style={{color:"white"}}/>
            ) : (
            <FaTimes size={20} style={{color:"white"}}/>)
            }
         </div>
    </div>
  )
}

export default Navbar