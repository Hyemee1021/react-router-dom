import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact</h2>
      <div className="container">
        <div className="socials flex">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="email-container flex">
          <input type="text" placeholder="email addrees" />
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>
    </section>
  );
};
