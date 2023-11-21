import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
        <a href="#top">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#aboutme">About Me</a>
      </div>
    </nav>
  );
};

export default NavBar;
