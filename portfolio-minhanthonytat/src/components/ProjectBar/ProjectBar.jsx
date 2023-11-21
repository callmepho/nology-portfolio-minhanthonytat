import React, { useState } from "react";
import styles from "./ProjectBar.module.scss";

const ProjectBar = ({ projects, setActive, active }) => {
  return (
    <>
      <nav className={styles.bar}>
        {projects.map((project, index) => (
          <h4
            className={
              index == active
                ? styles.heading + " " + styles.active
                : styles.heading
            }
            key={index}
            onClick={() => setActive(index)}>
            {project.heading}
          </h4>
        ))}
      </nav>
    </>
  );
};

export default ProjectBar;
