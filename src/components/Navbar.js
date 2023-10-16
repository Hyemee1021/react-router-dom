import React, { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <header>
      <nav className="container navigation flex">
        <div className="flex nav-left">
          <h1>Hye Mee Park</h1>
          <div className="line">MERN developer</div>
        </div>

        <div className="menu">
          <div className="hamburger">
            {showMenu ? (
              <i class="fa-solid fa-x" onClick={() => setShowMenu(false)}></i>
            ) : (
              <i
                className="fa-solid fa-bars"
                onClick={() => setShowMenu(true)}
              ></i>
            )}
          </div>

          <ul
            className={showMenu ? "flex slide" : "flex"}
            onClick={() => setShowMenu(false)}
          >
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
