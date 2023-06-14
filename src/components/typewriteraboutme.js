import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Typewriteraboutme = () => {
    const [text] = useTypewriter({
        words: ['Here is a little bit about myself:'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })
  return (
    <h1>
        About Me <br></br><br></br> {''}
        <span style={{fontWeight: 'bold', color: 'white'}}>
            {text}
        </span>
    </h1>
  )
}

export default Typewriteraboutme;