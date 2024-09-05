import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/header.css"
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="position-sticky top-0 bg-white">
      <Navbar expand="lg" className="fs-4 ">
        <Container className="py-3 ">
          <Navbar.Brand>
            <div>
              <img src={logo} alt="JohnDev," />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto  gap-3 icons">
              <a href="#hero " className="home">Home</a>

              <a href="#portfolio " className="por">Portfolio </a>
              <a href="#about" className="me">About me</a>
              <a href="#testimonials" className="test">Testimonials</a>
            </Nav>

            <Nav className="ms-auto  gap-4">
              <button className="contactme">Contact Me</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
