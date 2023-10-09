import React from "react";
import porfolioPic from "../assets/prem.png";
export const Hero = () => {
  return (
    <section id="home" className="container  hero-section">
      <div className="grid hero">
        <div className="left flex">
          <p>
            Hi, I am <strong>Prem Archarya</strong>
          </p>
          <h3>Software engineer</h3>
          <p>I love coding and teach others what I know</p>
          <button className="download-btn">
            <a href="../assets/portfolio-website.pdf" download>
              <i class="fa fa-download" aria-hidden="true"></i> Download CV
            </a>
          </button>
        </div>

        <div className="right flex">
          <img src={porfolioPic} alt="porfolio-pic" />
        </div>
      </div>
    </section>
  );
};
