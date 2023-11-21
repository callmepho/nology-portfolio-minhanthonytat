import Landing from "./sections/Landing/Landing";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.scss";
import AboutMe from "./sections/AboutMe/AboutMe";

function App() {
  return (
    <div className={styles.body}>
      <NavBar />
      <Landing />
      <Skills />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
