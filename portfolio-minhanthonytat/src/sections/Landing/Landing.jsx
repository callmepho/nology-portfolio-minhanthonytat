import React from "react";
import styles from "./Landing.module.scss";
import background from "../../assets/background.jpg";
const Landing = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.content}>
          <div className={styles.content__container}>
            <p className={styles.content__container__text}>Hello,</p>
            <ul className={styles.content__container__list}>
              <li className={styles.content__container__list__item}>world !</li>
              <li className={styles.content__container__list__item}>
                I'm Anthony !
              </li>
            </ul>
          </div>
        </div>
        <h3 className={styles.h3}>
          Junior Software Developer<span className={styles.cursor}>_</span>
        </h3>
      </div>
    </div>
  );
};

export default Landing;
