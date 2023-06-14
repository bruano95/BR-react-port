import React, { useEffect } from 'react';import Frontimg from '../public/frontpage.jpg'
import Typewritercontactme from './typewritercontactme.js';
import "../styles/Contactme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contactmecard = () => {
    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <div>
      <div className="frontpageImage">
        <div className="backgroundimg">
          <img className="front-img" src={Frontimg} alt="FrontImg" />
        </div>
        <div className="frontpagecontent">
          <Typewritercontactme />
        </div>
      </div>
      <div data-aos="fade-top" className='form'>
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Ask anything or leave comment here..." />
            <button className='btn'>Submit</button>
        </form>

      </div>
    </div>
      )
}

export default Contactmecard;