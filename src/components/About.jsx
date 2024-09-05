import React from "react";
import "../styles/about.css";
import man from "../assets/images/man.png";
const About = () => {
  return (

    <div className="about-bg d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5 ">
          <div className="col col-lg-6 ">
            <h3>Hey, I am Jesutayo</h3>
            <h2>I develop dynamic and <br /> User-Centered Web <br /> Applications</h2>{" "}
            <p>
              My expertise spans both front-end and back-end development,<br />
              enabling me to build comprehensive solutions that meet diverse <br />
              client needs.{" "}
            </p>
            <button> Get In Touch</button>
          </div>
          <div className="col col-lg-5 image-content">
            <img className="image-man img-fluid" src={man} alt=" a man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
