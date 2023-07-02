import styles from "../styles/about.module.css";
import {
  html,
  css,
  javascript,
  react,
  docker,
  git,
  mysql,
  postgres,
  typescript,
  node,
  nest,
  mongodb,
} from "../public/about/";
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
            <div className={styles.skillCard}>
              <img src={html} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={css} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={javascript} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={react} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={docker} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={git} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={mysql} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={postgres} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={typescript} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={node} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={nest} alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src={mongodb} alt="docker" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
