import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Carousel.module.scss";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export const skills = [
  {
    heading: "HTML/JavaScript/CSS",
    desc: "Proficient in building interactive and visually appealing web interfaces using HTML, JavaScript, and CSS.",
    imgs: ["html.svg", "javascript.svg", "css.svg"],
  },
  {
    heading: "React",
    desc: "Skilled in developing seamless single-page applications, utilizing React for dynamic and responsive user experiences.",
    imgs: ["react.svg"],
  },
  {
    heading: "Java & Spring",
    desc: "Experienced in Java programming and Spring framework for creating robust and scalable back-end applications.",
    imgs: ["java.svg", "spring.svg"],
  },
  {
    heading: "FireBase/FireStore",
    desc: "Expertise in Firebase and Firestore for real-time data management and efficient cloud-based solutions.",
    imgs: ["firebase.svg"],
  },
  {
    heading: "MySQL",
    desc: "Proficient in MySQL for designing, optimizing, and managing relational databases, ensuring seamless data operations.",
    imgs: ["mysql.svg"],
  },
];

const Carousel = () => {
  const [active, setActive] = useState(null);
  const [index, setIndex] = useState([1, 2, 3, 4, 5]);

  const next = () => {
    console.log("clicked next");
    let newIndex = index.map((idx) => {
      if (idx + 1 > 5) {
        return 1;
      }
      return idx + 1;
    });
    setIndex(newIndex);
  };

  const prev = () => {
    console.log("clicked prev");
    let newIndex = index.map((idx) => {
      if (idx - 1 < 1) {
        return 5;
      }
      return idx - 1;
    });
    setIndex(newIndex);
  };

  useEffect(() => {
    if (!skills) {
      return;
    }
    setActive(skills);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        {active !== null &&
          active.map((skill, idx) => {
            return (
              <Card
                key={skill.heading}
                heading={skill.heading}
                desc={skill.desc}
                imgs={skill.imgs}
                idx={index[idx]}
              />
            );
          })}

        <img
          src={left}
          onClick={prev}
          className={styles.arrow + " " + styles.arrow_left}
        />
        <img
          src={right}
          onClick={next}
          className={styles.arrow + " " + styles.arrow_right}
        />
      </div>
    </div>
  );
};

export default Carousel;
