import React, { useState } from "react";
import styles from "./Projects.module.scss";
import ProjectBar from "../../components/ProjectBar/ProjectBar";

const InfoCard = ({ project, active, index }) => {
  return (
    <div className={active == index ? styles.info : styles.hidden}>
      <h1>{project.heading}</h1>
      <img className={styles.img} src={project.img} />
      <div className={styles.links}>
        <p>
          GitHub: <a href={project.link}>Link</a>
        </p>
        {project?.deploy && (
          <p>
            Deloyed: <a href={project?.deploy}>Link</a>
          </p>
        )}
      </div>
      <h4>Description:</h4>
      <p className={styles.summary}>{project.sum}</p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      heading: "Portfolio",
      link: "https://github.com/callmepho/nology-portfolio-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/284460741-7018d936-7c35-488e-b106-edcf2121a444.png",
      sum: "Portfolio website build using react.",
    },
    {
      heading: "FakeOS",
      link: "https://github.com/callmepho/nology-FakeOS-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282969002-5cd3df38-1aa0-43d8-9d89-854882b723ee.png",
      sum: "Used HTML & CSS to recreate Windows XP OS desktop. Includes some mini-game desktop apps.",
    },
    {
      heading: "Morse Code",
      link: "https://github.com/callmepho/nology-MorseCode-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282974357-f9b24a46-9bf5-4d4c-8a87-1511d12e5af7.png",
      sum: "Application to translate to and from morse code using javascript functions.",
    },
    {
      heading: "Google Books Search",
      link: "https://github.com/callmepho/nology-GoogleBook-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282972658-9f6316f7-504e-410b-87ab-b9114de8e235.png",
      sum: "Simple book search app using Google Books API. Built using react.",
    },
    {
      heading: "eShop",
      link: "https://github.com/callmepho/nology-eShop-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/279883281-dcb96cb7-02d5-4cf5-967a-c5503c90dceb.png",
      deploy: "https://keebstore-minhanthonytat.netlify.app/",
      sum: "Basic fullstack app of an E-commerce store. Built using react for frontend and Firebase/Firestore for backend.",
    },
    {
      heading: "Minesweeper",
      link: "https://github.com/callmepho/nology-Minesweeper-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/284465760-3a440a78-5573-48fe-8689-0787d08044e2.png",
      sum: "A CLI Minesweeper game built using Java.",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={styles.section} id="projects">
      <h1>Projects</h1>
      <ProjectBar projects={projects} setActive={setActive} active={active} />
      {projects.map((project, index) => (
        <InfoCard key={index} project={project} index={index} active={active} />
      ))}
    </div>
  );
};

export default Projects;
