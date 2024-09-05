import React from 'react'
import "../styles/footer.css"
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/Facebook.png"
import instagram from "../assets/images/Instagram.png";
import twitter from "../assets/images/Twitter.png";
import linkedin from "../assets/images/Linkedin.png";
const Footer = () => {
  return (
    <div className="footer-bg d-flex justify-content-between align-items-center">
      <div className="container  footer-body">
        <div className=" d-flex justify-content-between align-items-center footer-first">
          <div className="">
            <img className='footer-img' src={logo} alt="" />
          </div>
          <div className="footer-links d-flex gap-4">
            {" "}
            <a href="#hero ">Home</a>
            <a href="#portfolio ">Portfolio </a>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#portfolio ">Portfolio </a>
          </div>
          <div className="footer-images d-flex gap-3">
            <img className="img-fluid" src={facebook} alt="" />
            <img className="img-fluid" src={instagram} alt="" />
            <img className="img-fluid" src={twitter} alt="" />
            <img className="img-fluid" src={linkedin} alt="" />
          </div>
        </div>

        <div className=" d-flex justify-content-between align-items-center footer-below">
          <div className="airdokan">
            {" "}
            <a href="#"> Made with 💖 by Airdokan</a>
          </div>

          <div className='privacy-terms d-flex gap-4'>
            {" "}
            <a href="#privacy">Privacy Policy</a>
            <a href="#service">Terms of Service</a>
            <a href="#cookie">Cookies Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer