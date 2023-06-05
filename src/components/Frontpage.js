import "./Frontpage.css";
import React from 'react';
import Frontimg from "../public/frontpage.jpg";
import BrImg from "../public/BrImg.JPG";

const Frontpage = () => {
  return (
    <div className="frontpageImage">
        <div className="backgroundimg">
            <img className="front-img" src={Frontimg} alt="FrontImg"/>
        </div>
        <div className="frontpagecontent">
        <img className="brandonpic" src={BrImg} alt="BrImg" />
            <p>I am a full stack web developer. I am originally from Southern California and now reside in Seattle, Washington. I enjoy snowboarding, watching sports, and eating good food. I graduated from California State University of Dominguez Hills with a Pre-Physical therapy degree and currently work at University of Washington Medical Center. I plan to continue to learn web development in hopes to change my career path in the near future. I enjoy all things tech from building computers to learning coding.</p>
        </div>
    </div>
  )
}

export default Frontpage