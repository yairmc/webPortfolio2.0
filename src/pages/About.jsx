import styles from "../styles/about.module.css";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import react from "../public/react.png";
import docker from "../public/docker.png";
import git from "../public/git.png";
import mysql from "../public/mysql.png";
import postgres from "../public/postgresql.png";
import typescript from "../public/typescript.png";
import node from "../public/node.png";
import nest from "../public/nest.png";
import mongodb from "../public/mongo.png";
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
              <p>hola</p>
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
