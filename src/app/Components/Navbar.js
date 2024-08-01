import logo from "../Images/next-logo.png";
import git from "../Images/git-logo.png";
import vercel from "../Images/vercel-logo.png";
import Image from "next/image";
import React from "react";
import "../Styles/Navbar-style.css";

const Navbar = () => {
  return (
    <div>
      <section className="navigation-section">
        <div className="side-head">
          <Image src={logo} height={25} width={25} className="logo" alt="no"/>
          <span>/</span>
          <a href="">Login</a>
        </div>
        <div className="side-btn">
          <button className="git">
            <Image src={git} height={25} width={25} className="git-logo" alt="no"/>
            <span>GitHub</span>
          </button>
          <button className="vercel">
            <Image
              src={vercel}
              height={25}
              width={25}
              className="vercel-logo"
              alt="no"
            />
            <span>Deploy to Vercel</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
