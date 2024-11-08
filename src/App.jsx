import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Wrap } from '../assets/css/styles.jsx';
import { smooth } from '../utils/smooth.jsx';

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    smooth();
  });

  return (
    <>
      <Wrap>
        <Nav />
      </Wrap>
    </>
  )
};

export default App;