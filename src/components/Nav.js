import React, { useState, useEffect } from "react";
import "./Nav.css";
const UserProfile = process.env.PUBLIC_URL + "/User_Profile.png";

function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY>50) {
            setshow(true);
        } else {
            setshow(false);
        }
    })

    return () => {
        window.removeEventListener("scroll", () => {})
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img alt="User logged" src={UserProfile} className="nav__avatar" />
    </nav>
  );
}

export default Nav;
