import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 8) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav>
      <div className={` ${show ? "navbar-blue" : "navBar"}`}>
        <div className="logo">
          <img src={!show ? "/blueLogo.png" : "whiteLogo.png"} alt="logo" />
        </div>
        <ul className={` ${isOpen ? "navItems navItems-open" : "navItems"}`}>
          <a href="/">Home</a>
          <a href="/aboutme">About us</a>
          <a href="/">Blog</a>
          <a href="/">Shop</a>
          <a href="/contact">Contact </a>
        </ul>
        <Hamburger
          size={"26"}
          toggled={isOpen}
          toggle={setOpen}
          color={` ${show ? "white" : "#1d1e50"}`}
          onClick={() => setOpen((isOpen) => !isOpen)}
          rounded
        />
      </div>
    </nav>
  );
};

export default Nav;
