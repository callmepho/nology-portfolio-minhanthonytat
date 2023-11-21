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
      <p className={styles.summary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        aliquam, beatae nobis ad totam facere voluptatem vitae vel ut possimus
        provident earum voluptatum, accusantium optio exercitationem officiis
        explicabo, quia cum?
      </p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      heading: "Portfolio",
      link: "https://github.com/callmepho/nology-portfolio-minhanthonytat",
      img: "http://placekitten.com/1280/720",
    },
    {
      heading: "FakeOS",
      link: "https://github.com/callmepho/nology-FakeOS-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282969002-5cd3df38-1aa0-43d8-9d89-854882b723ee.png",
    },
    {
      heading: "Morse Code",
      link: "https://github.com/callmepho/nology-MorseCode-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282974357-f9b24a46-9bf5-4d4c-8a87-1511d12e5af7.png",
    },
    {
      heading: "Google Books Search",
      link: "https://github.com/callmepho/nology-GoogleBook-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/282972658-9f6316f7-504e-410b-87ab-b9114de8e235.png",
    },
    {
      heading: "eShop",
      link: "https://github.com/callmepho/nology-eShop-minhanthonytat",
      img: "https://user-images.githubusercontent.com/47295382/279883281-dcb96cb7-02d5-4cf5-967a-c5503c90dceb.png",
      deploy: "https://keebstore-minhanthonytat.netlify.app/",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={styles.section} id="projects">
      <ProjectBar projects={projects} setActive={setActive} active={active} />
      {projects.map((project, index) => (
        <InfoCard key={index} project={project} index={index} active={active} />
      ))}
    </div>
  );
};

export default Projects;
