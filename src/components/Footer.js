import React from "react";

const Footer = () => {
  return (
    <div className="footSec">
      <div className="mainFoot">
        <div className="mainFoot__item">
          <h1 className="companyName">Yam Inc.</h1>
          <ul>
            <li>&copy; 2020 </li>
          </ul>
        </div>
        <div className="mainFoot__item ">
          <h2>Services</h2>
          <ul>
            <li>Aenean mattis</li>
            <li>Vestibulum ante</li>
            <li>Spien etiam</li>
            <li>Morbi eget leo</li>
          </ul>
        </div>
        <div className="mainFoot__item ">
          <h2>Products</h2>
          <ul>
            <li>Vestibulum diam</li>
            <li>Phasellus sapien eros</li>
            <li>Finibus bibendum nulla</li>
            <li>Morbi eget leo</li>
          </ul>
        </div>
        <div className="mainFoot__item contact">
          <h2>Contact us</h2>
          <h4>contact@email.com</h4>
          <h4>828-3934304</h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;
