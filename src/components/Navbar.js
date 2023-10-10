import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
      <nav className="container navigation flex">
        <div className="flex nav-left">
          <h1>Hye Mee Park</h1>
          <div className="line">MERN developer</div>
        </div>

        <div className="menu">
          <ul className="flex">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/about-me">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
