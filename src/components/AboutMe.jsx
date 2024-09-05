import React from "react";
import "../styles/aboutme.css";
import aboutman from "../assets/images/aboutman.png"
const AboutMe = () => {
  return (
    <div className="aboutman-body  d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5">
          <div className="col col-lg-6 aboutman-div">
            <img className="img-fluid aboutmaan" src={aboutman} alt="" />
          </div>

          <div className="col col-lg-5 aboutme-details">
            <h3 >About</h3>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </p>
            <p>
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus r.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
