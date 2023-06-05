import "../styles/foot.css"
import React from 'react'
import { FaEnvelope, FaGithub, FaHome, FaLinkedin,  } from 'react-icons/fa'

const foot = () => {
  return (
    <div className="foot">
        <div className="foot-components">
            <div className="location">
                <FaHome size={30} style={{ color: "white", marginRight:"2rem"}}/>
            </div>
            <div className="city">
                Seattle, WA
            </div>
            <div className="email">
                <FaEnvelope size={30} style={{ color: "white", marginRight:"2rem"}}/>
            </div>
            <div className="emailMe">
                bruano@uw.edu
            </div>
            <div className="github">
                <a href="https://github.com/bruano95">
                <FaGithub size={30} style={{ color: "white", marginRight:"2rem"}}/>
                </a>
            </div>
            <div className="emailMe">
                bruano95
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/brandon-ruano-7365b0263/">
                <FaLinkedin size={30} style={{ color: "white", marginRight:"2rem"}}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default foot