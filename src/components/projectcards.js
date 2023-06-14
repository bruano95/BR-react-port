import React, { useEffect } from 'react';
import Blockparty from "../public/Block-Party.png";
import WnD from "../public/WnD.jpeg";
import QuizApp from "../public/Quizapp.png";
import { NavLink } from 'react-router-dom';
import "../styles/projectcard.css";
import Frontimg from '../public/frontpage.jpg';
import Typewriterproject from './typewriterproject';
import Aos from "aos";
import "aos/dist/aos.css";



const Projectcards = () => {
    useEffect(()=>{
        Aos.init({ duration: 3000});
    }, []);
    return (
        <div>
            <div className="frontpageImage">
                <div className="backgroundimg">
                    <img className="front-img" src={Frontimg} alt="FrontImg" />
                </div>
                <div className="frontpagecontent">
                    <Typewriterproject />
                </div>
                <div data-aos="fade-right" className='projectcard-container'>
                    <div className='project-card'>
                        <img src={Blockparty} alt="images" />
                        <h2 className='project-title'>Block Party</h2>
                        <div className='project-description'>
                            An housing market application that allows user to search for homes in a desired area. Data was pulled from multiple API's to bring together this application that provides a way for users to follow the housing market trends.
                        </div>
                        <div className='project-link'>
                            <NavLink to="https://jpbaer.github.io/Housing-Market-Project/" className="btn">Visit Application</NavLink>
                        </div>
                    </div>
                </div>
                <div className='projectcard-container'>
                    <div data-aos="fade-left" className='project-card'>
                        <img src={WnD} alt="images" />
                        <h2 className='project-title'>Wheelin' n Dealin'</h2>
                        <div className='project-description'>
                            An application for carsalesmen to track their sold cars in order to properly follow the car market trends enhancing their sales abilities. This application uses Node.js and express to allow for this application to run smoothly.
                        </div>
                        <div className='project-link'>
                            <NavLink to="https://aqueous-inlet-27718.herokuapp.com/login/" className="btn">Visit Application</NavLink>
                        </div>
                    </div>
                </div>
                <div className='projectcard-container'>
                    <div data-aos="fade-right" className='project-card'>
                        <img src={QuizApp} alt="images" />
                        <h2 className='project-title'>Baseball Quiz</h2>
                        <div className='project-description'>
                            A quiz application that tests user's knowledge on baseball. the application uses Javascript to run a smooth interface.
                        </div>
                        <div className='project-link'>
                            <NavLink to="https://bruano95.github.io/Brandon-Quiz-App/" className="btn">Visit Application</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcards;