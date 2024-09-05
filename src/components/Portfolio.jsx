import React from "react";
import "../styles/portfolio.css";
import ahuse from "../assets/images/ahuse.png";
import dashboard from "../assets/images/dashboard.png";
import rent from "../assets/images/rent.png";
import right from "../assets/images/right.png";
import mgithub from "../assets/images/mgithub.png"
const Portfolio = () => {
  const portFolio = [
    {
      id: 1,
      img: ahuse,
      title: "Ahuse",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Suspendisse varius enim in eros.",
      website: "View website ",
    },
    {
      id: 2,
      img: dashboard,
      title: "App Dashboard",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      website: "View website ",
    },
    {
      id: 3,
      img: rent,
      title: "Easy Rent",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Suspendisse varius enim in eros.",
      website: "View website ",
    },
  ];
  return (
    <div className="container portfolioo">
      <div className="d-flex justify-content-between align-items-center">
        <div className="portfolio-text">
          {" "}
          <h3>Recent Projects</h3>
          <h1>My Portfolio</h1>
        </div>

        <div className="d-flex justify-content-center   github-text">
         
            {" "}
            <p className="d-flex  align-items-center gap-3">
              <img src={mgithub} alt="" />
              <span>Visit My GitHub</span>
            </p>
        
        </div>
      </div>

      <div className="port">
        {portFolio.map((item) => {
          return (
            <div key={item.id}>
              <img className="img-fluid" src={item.img} alt="" />

              <div className="portt">
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
                <button className="websitedes ">
                  {item.website}{" "}
                  <span>
                    <img src={right} alt="" />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
