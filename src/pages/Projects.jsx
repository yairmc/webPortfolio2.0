import styles from "../styles/projects.module.css";
import adminVet from "../public/projects/admiVet.png";
import blogCafe from "../public/projects/blogCafe.png";
import cotizadorCripto from "../public/projects/cotizadorCripto.png";
import foodComunity from "../public/projects/foodComunity.png";
import giftApp from "../public/projects/giftApp.png";
import planificadorGastos from "../public/projects/planificadorGastos.png";
import pomodoro from "../public/projects/pomodoro.png";
import traductor from "../public/projects/traductor.png";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>projects</p>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectCard}>
            <a
              href="https://appveterinaria-prueba-y.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={adminVet} alt="" />
              <p>veterinary administrator</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://blogdecafe-prueba01.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={blogCafe} alt="" />
              <p>coffee blog</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://cotizador-criptomonedas-y.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cotizadorCripto} alt="" />
              <p>cryptocurrency quote</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://foodcomunity.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={foodComunity} alt="" />
              <p>Food Community</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://y-gifs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={giftApp} alt="" />
              <p>Gift Expert App</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://control-presupuestos-y.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={planificadorGastos} alt="" />
              <p>expense planner</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://pomodoro-itson.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pomodoro} alt="" />
              <p>Pomodoro Timer</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://y-translator.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={traductor} alt="" />
              <p>Universal translator</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
