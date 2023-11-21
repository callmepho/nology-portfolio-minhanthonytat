import React from "react";
import CardList from "../../containers/CardList/CardList";
import { section } from "../section.module.scss";
import Carousel from "../../containers/Carousel/Carousel";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.body} id="skills">
      <h1>Skills</h1>
      <Carousel />
    </div>
  );
};

export default Skills;
