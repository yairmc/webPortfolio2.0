import styles from "../styles/projects.module.css";
import adminVet from "../public/projects/admiVet.png";
import blogCafe from "../public/projects/blogCafe.png";
import cotizadorCripto from "../public/projects/cotizadorCripto.png";
import foodComunity from "../public/projects/foodComunity.png";
import giftApp from "../public/projects/giftApp.png";
import planificadorGastos from "../public/projects/planificadorGastos.png";
import pomodoro from "../public/projects/pomodoro.png";
import traductor from "../public/projects/traductor.png";

export const ProjectCard = () => {
  return (
    <div className={styles.projectsContainer}>
      <a
        href="https://appveterinaria-prueba-y.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={adminVet}
              alt=""
            />
            <p className={styles.cardBack}>
              Appointment organizer practice project using React, html, tailwind
              and deploy in netlify, saving the information in localStorage
            </p>
          </div>
          <h3>veterinary administrator</h3>
        </div>
      </a>
      <a
        href="https://blogdecafe-prueba01.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={blogCafe}
              alt=""
            />
            <p className={styles.cardBack}>
              Practice project of a simple coffee themed blog using html and css
              practicing responsiveness with deploy on netlify
            </p>
          </div>
          <h3>coffee blog</h3>
        </div>
      </a>
      <a
        href="https://cotizador-criptomonedas-y.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={cotizadorCripto}
              alt=""
            />
            <p className={styles.cardBack}>
              Practice project of a cryptocurrency value quoter using react,
              css. creating components and consuming APIs in real time
              practicing responsiveness with deploy in netlify
            </p>
          </div>
          <h3>cryptocurrency quote</h3>
        </div>
      </a>
      <a
        href="https://foodcomunity.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={foodComunity}
              alt=""
            />
            <p className={styles.cardBack}>
              Altruistic fullstack project of a funder of a donation manager
              using React and css technologies on the FrontEnd deploying on
              Netlify and using nodejs and postgres on the BackEnd side
              deploying to Railway
            </p>
          </div>
          <h3>Food Comunity</h3>
        </div>
      </a>
      <a
        href="https://y-gifs.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={giftApp}
              alt=""
            />
            <p className={styles.cardBack}>
              Practice project using React and css, practicing the consumption
              of material using APIs
            </p>
          </div>
          <h3>Gif Expert App</h3>
        </div>
      </a>
      <a
        href="https://control-presupuestos-y.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={planificadorGastos}
              alt=""
            />
            <p className={styles.cardBack}>
              Practice project for expense control using React and css with
              deploy in Netlify
            </p>
          </div>
          <h3>expense planner</h3>
        </div>
      </a>
      <a
        href="https://pomodoro-itson.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={pomodoro}
              alt=""
            />
            <p className={styles.cardBack}>
              Final project of my career combining the practice of the pomodoro
              with a todo list, previously designed in figma and built using
              Html, javascript and css with deploy in Netlify
            </p>
          </div>
          <h3>Pomodoro Timer</h3>
        </div>
      </a>
      <a
        href="https://y-translator.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.projectCard}>
          <div className={styles.projectInner}>
            <img
              loading="lazy"
              className={styles.cardFront}
              src={traductor}
              alt=""
            />
            <p className={styles.cardBack}>
              Practice project using html, css and javascript with consumption
              of APIs doing deployment in Netlify
            </p>
          </div>
          <h3>Universal translator</h3>
        </div>
      </a>
    </div>
  );
};
