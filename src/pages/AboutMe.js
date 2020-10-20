import React from "react";
import AboutMeJson from "../constants/AboutMe.json";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import BreadCrumb from "../components/BreadCrumb";
import Nav from "../components/Nav";

const AboutMe = () => {
  return (
    <>
    <Nav/>
    <BreadCrumb paths={['Home','About me']}/>
    <div className="container">
      <div className="AboutMe">
        <div className="main">
          <div className="pic"></div>
          <div className="content">
            <h1>Hi. I'm {AboutMeJson.name}!</h1>
            <p className="intro">{AboutMeJson.intro}</p>
            <p className="quote">
              <span>"{AboutMeJson.quote}</span>
            </p>
            <p className="outro">{AboutMeJson.outro}</p>
            <div className="links">
              <a href="#" className="links__icons">
                <FaFacebookF />
              </a>
              <a href="#" className="links__icons">
                <AiOutlineInstagram />
              </a>
              <a href="#" className="links__icons">
                <FaLinkedinIn />
              </a>
              <a href="#" className="links__icons">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
