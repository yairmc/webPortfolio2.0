import styles from "../styles/about.module.css";

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
        </div>

        <div className={styles.meContainer}>
          <div className={styles.foto}>
            <div className={styles.imageContainer}></div>
            <p className={styles.title}>Who i am?</p>
            <p className={styles.subtitle}>
              I am a front-end developer for BeAnalitic in Obregon, Sonora. I
              have a great passion for UI effects, animations, and creating
              intuitive and dynamic user experiences. Lets do something special.
            </p>
          </div>
          <div className={styles.softSkills}>
            <SkillCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
