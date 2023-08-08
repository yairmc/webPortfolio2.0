import styles from "../styles/about.module.css";
import me from "../public/about/me.png";

import { SkillCard } from "../components/SkillCard";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>about me</p>
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.card}> creative</div>
          <div className={styles.card}> concentrated</div>
          <div className={styles.card}> fast</div>
          <div className={styles.card}> responsible</div>
        </div>

        <div className={styles.meContainer}>
          <div className={styles.imageInformation}>
            <div className={styles.imageContainer}>
              <img className={styles.foto} src={me} alt="me" />
            </div>
            <p className={styles.title}>
              I am a front-end developer for BeAnalitic in Obregon, Sonora. I
              have a great passion for UI effects, animations, and creating
              intuitive and dynamic user experiences. Let's do something
              special.
            </p>
          </div>
          <div className={styles.softSkillsContainer}>
            <p className={styles.title}>
              I consider myself a great autodidact in search of new learning.
              Developing my programming, algorithm and logic skills is essential
            </p>
            <div className={styles.softSkills}>
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
