import React from 'react';
import Navbar from '../components/Navbar';
import Frontpage from '../components/Frontpage';
import Foot from '../components/foot';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Frontpage/>
      <Foot/>
    </div>
  )
}

export default Home