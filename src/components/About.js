import React from "react";
import prem from "../assets/prem.png";
export const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">About me</h2>

      <div className="container flex">
        <div className="about-left flex">
          <img src={prem} alt="img" />
        </div>
        <div className="about-right">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            deleniti aliquam incidunt nulla magnam harum soluta velit fugiat
            neque tempore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus molestias, aliquid non cupiditate ullam similique
            exercitationem placeat vel. Facilis eius ex ratione eos illum
            officia voluptate quaerat, tempore laudantium ipsum.
          </p>
          <p>Sydney, Australia</p>
          <div className="tag">Interest</div>
          <div className="flex interests">
            <span>Coding</span>
            <span>Watch Youtube</span>
            <span>Going to gym</span>
            <span>Cooking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
