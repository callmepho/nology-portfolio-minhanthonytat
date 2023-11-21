import React from "react";
import styles from "./AboutMe.module.scss";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";

const AboutMe = () => {
  return (
    <div className={styles.body} id="aboutme">
      <div className={styles.shapeouter + " " + styles.circle}>
        <div className={styles.shapeinner + " " + styles.circle}></div>
      </div>
      <div className={styles.aboutme}>
        <h1>About Me</h1>
        <p>
          I have a background in hardware and IT networking looking to
          transition to my dream job of becoming a software developer.
          <br />
          <br />
          Previously studied at University of Melbourne in Science & Design and
          currently bootcamping with _Nology to achieve the skills demonstrated
          on this portfolio.
          <br />
          <br />
          You will finds links below to my socials for contact details and
          github for any previous or current projects that I am working on.
        </p>
        <div className={styles.contact}>
          <a href="https://github.com/callmepho">
            <img className={styles.img} src={github} />
            Github
          </a>
          <a href="mailto:minhanthonytat@gmail.com">
            <img className={styles.img} src={email} />
            Email
          </a>
          <a href="https://www.linkedin.com/in/minh-anthony-tat-b7a0a8239/">
            <img src={linkedin} className={styles.img} />
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
