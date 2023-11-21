import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
const Card = ({ heading, desc, imgs, idx }) => {
  return (
    <div className={styles.card + " " + styles["item" + idx]}>
      <div>
        <div className={styles.card_imgs}>
          {imgs.map((img) => {
            return <img key={img} className={styles.card_img} src={`${img}`} />;
          })}
        </div>
        <h2>{heading}</h2>
      </div>
      <div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
