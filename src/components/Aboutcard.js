import { React, useEffect } from 'react';
import Typewriteraboutme from './typewriteraboutme.js';
import Frontimg from '../public/frontpage.jpg';
import { NavLink } from 'react-router-dom';
import BrandonProfile from '../public/Brandon-profile.png';
import '../styles/aboutmecard.css';
import '../styles/projectcard.css'
import Aos from 'aos';
import "aos/dist/aos.css";


const Aboutcard = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="about-card-container">
      <div className="frontpageImage">
        <div className="backgroundimg">
          <img className="front-img" src={Frontimg} alt="FrontImg" />
        </div>
        <div className="frontpagecontent">
          <Typewriteraboutme />
        </div>
      </div>
      <div data-aos="fade-right" className="profile-card">
        <img className="profile-img" src={BrandonProfile} alt="Profile" />
      </div>
      <div data-aos="fade-left" className="education-card">
        <h3>Education</h3>
        <ul>
          <li>Bachelor's degree in Kinesiology, California State University of Dominguez Hills</li>
          <li>Coding Bootcamp, University of Washington</li>
        </ul>
      </div>
      <div data-aos="fade-right" className="skills-card">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>MERN Stack</li>
          <li>React.js</li>
        </ul>
      </div>
      <div data-aos="fade-left" className="interests-card">
        <h3>Interests</h3>
        <ul>
          <li>Snowboarding</li>
          <li>Hiking</li>
          <li>Food</li>
          <li>Sports</li>
          <li>Video games</li>
          <li>Computers</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutcard;
