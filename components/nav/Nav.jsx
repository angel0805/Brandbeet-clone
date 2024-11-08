import React from "react";
import { Wrap } from './NavStyles.jsx'

function Nav() {
  return (
    <Wrap>
      <div className="lft-nav">
        <h1 id="logo">LOGO</h1>
        <h1>LOGO</h1>
      </div>
      <div className="rght-nav">
        <h2 id="nav-contact">contact@Beauty-to-you.com</h2>
        <h2>contact@Beauty-to-you.com</h2>
      </div>
    </Wrap>
  );
}

export default Nav;