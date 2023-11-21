import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
  },
];

const CardList = () => {
  const [project, setProject] = useState(projects);

  useEffect(() => {
    if (!project) {
      return;
    }
    setProject(projects);
  }, []);

  return (
    <div className={styles.list}>
      {project.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default CardList;
