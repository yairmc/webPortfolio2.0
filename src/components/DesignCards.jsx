import styles from "../styles/designs.module.css";
import dragonBallApp from "../public/designProjects/dragonBallAppF.png";
import foodF from "../public/designProjects/foodF.png";
import gpsF from "../public/designProjects/gpsF.png";
import neumorphismF from "../public/designProjects/neumorphismF.png";
import petsearchF from "../public/designProjects/petsearchF.png";
import pomodoroF from "../public/designProjects/pomodoroF.png";
import landingPage from "../public/designProjects/landingPage.png";

export const DesignCards = () => {
  return (
    <div className={styles.designsContainer}>
      <a
        className={styles.linkCard}
        href="https://www.figma.com/file/MLe6d1NAETBFy9CRoD0O54/Dragon-Ball-App?type=design&node-id=0%3A1&mode=design&t=gqh1Cz0COGM3rbKo-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img
            loading="lazy"
            className={styles.image}
            src={dragonBallApp}
            alt=""
          />
          <p className={styles.imageDescription}>dragon Ball App</p>
        </div>
      </a>
      <a
        className={styles.linkCard}
        href="https://www.figma.com/file/h0qellF3nXsgf8B1MaTpKs/FoodComunity-2.0?type=design&mode=design&t=gqh1Cz0COGM3rbKo-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img loading="lazy" className={styles.image} src={foodF} alt="" />
          <p className={styles.imageDescription}>Food Comunity</p>
        </div>
      </a>

      <a
        className={styles.linkCard}
        href="https://www.figma.com/file/rYJoKHIlSSJg5Q616YH4eb/Neumorphism?type=design&mode=design&t=JkLzFoPnmu8kkfSQ-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img
            loading="lazy"
            className={styles.image}
            src={neumorphismF}
            alt=""
          />
          <p className={styles.imageDescription}>Neumorphism Tools</p>
        </div>
      </a>
      <a
        className={styles.linkCard}
        href="https://www.figma.com/file/lphNTGta2tFxwEmJu5klfR/Pet-Shared?type=design&mode=design&t=JkLzFoPnmu8kkfSQ-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img
            loading="lazy"
            className={styles.image}
            src={petsearchF}
            alt=""
          />
          <p className={styles.imageDescription}>Pet Search</p>
        </div>
      </a>
      <a
        className={styles.linkCard}
        href="https://www.figma.com/file/31nYcoQYpEcD2MhfWSy7ud/Pomodoro-Todo?type=design&mode=design&t=JkLzFoPnmu8kkfSQ-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img loading="lazy" className={styles.image} src={pomodoroF} alt="" />
          <p className={styles.imageDescription}>Pomodoro Timer</p>
        </div>
      </a>
      <a
        className={styles.linkCard}
        href="https://www.figma.com/proto/DMuipiwtkLoa5nA7VoXjet/Curso?type=design&node-id=110-2&t=GlUCYTXypy4fNfOi-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=110%3A2&mode=design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.card}>
          <img
            loading="lazy"
            className={styles.image}
            src={landingPage}
            alt=""
          />
          <p className={styles.imageDescription}>Landing Page</p>
        </div>
      </a>
    </div>
  );
};
