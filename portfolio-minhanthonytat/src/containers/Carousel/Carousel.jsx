import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Carousel.module.scss";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

export const skills = [
  {
    heading: "HTML/JavaScript/CSS",
    desc: "Proficient in building interactive and visually appealing web interfaces using HTML, JavaScript, and CSS.",
    imgs: [
      "https://user-images.githubusercontent.com/47295382/284469078-afd118f3-cf3d-4afd-af96-50f479bc0856.svg",
      "https://user-images.githubusercontent.com/47295382/284469083-ea6dd6a0-919d-48c7-831a-d63f9cc6c771.svg",
      "https://user-images.githubusercontent.com/47295382/284469014-ecdffd38-bc22-4f5e-9b61-a3f91996d304.svg",
    ],
  },
  {
    heading: "React",
    desc: "Skilled in developing seamless single-page applications, utilizing React for dynamic and responsive user experiences.",
    imgs: [
      "https://user-images.githubusercontent.com/47295382/284469072-2a48f393-5518-41ce-91ca-0843fcb72711.svg",
    ],
  },
  {
    heading: "Java & Spring",
    desc: "Experienced in Java programming and Spring framework for creating robust and scalable back-end applications.",
    imgs: [
      "https://user-images.githubusercontent.com/47295382/284469080-0aa2b14b-6b94-456f-89f6-519f9dca4fbe.svg",
      "https://user-images.githubusercontent.com/47295382/284469075-bf5c22c5-ea11-4574-a81a-c1586bca0782.svg",
    ],
  },
  {
    heading: "FireBase/FireStore",
    desc: "Expertise in Firebase and Firestore for real-time data management and efficient cloud-based solutions.",
    imgs: [
      "https://user-images.githubusercontent.com/47295382/284469032-084c78ac-eaad-40e1-8291-9102a883851d.svg",
    ],
  },
  {
    heading: "MySQL",
    desc: "Proficient in MySQL for designing, optimizing, and managing relational databases, ensuring seamless data operations.",
    imgs: [
      "https://user-images.githubusercontent.com/47295382/284469065-d4e83da7-a931-4ca6-a801-078a1bfb7791.svg",
    ],
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
