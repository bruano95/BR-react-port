import "../styles/Frontpage.css";
import React from 'react';
import Frontimg from "../public/frontpage.jpg";
import Typewriter from "./typewriter";

const Frontpage = () => {
  return (
    <div className="frontpageImage">
        <div className="backgroundimg">
            <img className="front-img" src={Frontimg} alt="FrontImg"/>
        </div>
        <div className="frontpagecontent">
            <Typewriter />
        </div>
    </div>
  )
}

export default Frontpage