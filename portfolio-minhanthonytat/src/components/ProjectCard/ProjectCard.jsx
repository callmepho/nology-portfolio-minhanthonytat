import { useEffect, useState } from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}>
      <a href={project.link}>
        <img className={styles.img} src={project.img} />
      </a>
      <h1 className={active ? styles.heading : styles.hidden}>
        {project.heading}
      </h1>
    </div>
  );
};

export default ProjectCard;
