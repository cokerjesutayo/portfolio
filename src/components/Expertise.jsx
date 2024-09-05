import React from "react";
import "../styles/expertise.css";
import mobile from "../assets/images/mobile.png";
import frontend from "../assets/images/frontend.png"
import testing from "../assets/images/testing.png";
import cloud from "../assets/images/cloud.png";
const Expertise = () => {
  return (
    <div className="container expertise-body ">
      <h3>My Skills</h3>
      <h1>My Expertise</h1>

      <div className="expertise-div">
        {/* first div */}
        <div className="expertise-ones">
          <div>
            <img src={mobile} alt="" />
          </div>
          <h2>Responsive Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* second div */}
        <div className="expertise-one">
          <div>
            <img src={frontend} alt="" />
          </div>
          <h2>Front-End Frameworks</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* third div */}
        <div className="expertise-one">
          <div>
            <img src={testing} alt="" />
          </div>
          <h2>Testing and Debugging</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* fourth div */}
        <div className="expertise-one">
          <div>
            <img src={cloud} alt="" />
          </div>
          <h2>Cloud Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
