import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Typewritercontactme = () => {
    const [text] = useTypewriter({
        words: ['Please reach out to me through this form:'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })
  return (
    <h1>
        Contact Me <br></br><br></br> {''}
        <span style={{fontWeight: 'bold', color: 'white'}}>
            {text}
        </span>
    </h1>
  )
}

export default Typewritercontactme;