import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Wrap } from "../components/nav/NavStyles";
import { smooth } from "../utils/smooth";
import Nav from "../components/nav/Nav";

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
  );
};

export default App;