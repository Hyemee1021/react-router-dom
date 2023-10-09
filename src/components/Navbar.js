import React from "react";

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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
