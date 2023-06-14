import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Typewriterproject = () => {
    const [text] = useTypewriter({
        words: ['Here is some of my work:'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })
  return (
    <h1>
        Projects <br></br><br></br> {''}
        <span style={{fontWeight: 'bold', color: 'white'}}>
            {text}
        </span>
    </h1>
  )
}

export default Typewriterproject;