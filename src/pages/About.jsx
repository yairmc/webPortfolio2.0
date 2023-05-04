import styles from "../styles/about.module.css";
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
              <img src="../public/html.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/css.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/javascript.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/react.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/docker.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/git.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/mysql.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/postgresql.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/typescript.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/node.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/nest.png" alt="docker" />
            </div>
            <div className={styles.skillCard}>
              <img src="../public/mongo.png" alt="docker" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
