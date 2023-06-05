import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const Typewriter = () => {
    const [text] = useTypewriter({
        words: ['full stack developer', 'problem solver', 'creative thinker', 'ambitious learner'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })
  return (
    <h1>
        My name is Brandon Ruano. <br></br> I am a {' '}
        <span style={{fontWeight: 'bold', color: 'white'}}>
            {text}
        </span>
    </h1>
  )
}

export default Typewriter;