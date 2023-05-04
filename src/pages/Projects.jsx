import styles from "../styles/projects.module.css";

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
              <img src="../public/projects/admivet.png" alt="" />
              <p>veterinary administrator</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://blogdecafe-prueba01.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/blogCafe.png" alt="" />
              <p>coffee blog</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://cotizador-criptomonedas-y.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/cotizadorCripto.png" alt="" />
              <p>cryptocurrency quote</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://foodcomunity.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/foodComunity.png" alt="" />
              <p>Food Community</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://y-gifs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/giftApp.png" alt="" />
              <p>Gift Expert App</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://control-presupuestos-y.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/planificadorGastos.png" alt="" />
              <p>expense planner</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://pomodoro-itson.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/pomodoro.png" alt="" />
              <p>Pomodoro Timer</p>
            </a>
          </div>
          <div className={styles.projectCard}>
            <a
              href="https://y-translator.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../public/projects/traductor.png" alt="" />
              <p>Universal translator</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
