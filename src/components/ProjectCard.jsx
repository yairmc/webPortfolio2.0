import styles from "../styles/projects.module.css";
import adminVet from "../public/projects/admiVet.png";
import cotizadorCripto from "../public/projects/cotizadorCripto.png";
import giftApp from "../public/projects/giftApp.png";
import planificadorGastos from "../public/projects/planificadorGastos.png";
import { tailwind, css, react } from "../public/about/";

export const ProjectCard = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsContainer}>
        <a
          href="https://appveterinaria-prueba-y.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardDescription}>
                veterinary administrator
              </h3>
              <p className={styles.cardDescription}>
                Appointment organizer practice project using React, html,
                tailwind and deploy in netlify, saving the information in
                localStorage
              </p>
            </div>
            <img
              loading="lazy"
              className={styles.cardImage}
              src={adminVet}
              alt="adminVet"
            />
            <div className={styles.cardIconsInformation}>
              <h3 className={styles.cardDescription}>Technologies</h3>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={react} alt="figma" />
              </div>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={tailwind} alt="figma" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://control-presupuestos-y.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardDescription}>Planificador deGastos</h3>
              <p className={styles.cardDescription}>
                Practice project for expense control using React and css with
                deploy in Netlify
              </p>
            </div>
            <img
              loading="lazy"
              className={styles.cardImage}
              src={planificadorGastos}
              alt="planificadorGastos"
            />
            <div className={styles.cardIconsInformation}>
              <h3 className={styles.cardDescription}>Technologies</h3>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={react} alt="figma" />
              </div>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={css} alt="figma" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://cotizador-criptomonedas-y.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardDescription}>
                Cotizador Criptomonedas
              </h3>
              <p className={styles.cardDescription}>
                Practice project of a cryptocurrency value quoter using react,
                css. creating components and consuming APIs in real time
                practicing responsiveness with deploy in netlify
              </p>
            </div>
            <img
              loading="lazy"
              className={styles.cardImage}
              src={cotizadorCripto}
              alt="cotizador criptomonedas"
            />
            <div className={styles.cardIconsInformation}>
              <h3 className={styles.cardDescription}>Technologies</h3>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={react} alt="figma" />
              </div>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={css} alt="figma" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://y-gifs.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h3 className={styles.cardDescription}>GiftExpertApp</h3>
              <p className={styles.cardDescription}>
                Practice project using React and css, practicing the consumption
                of material using APIs
              </p>
            </div>
            <img
              loading="lazy"
              className={styles.cardImage}
              src={giftApp}
              alt="Gift Expert App"
            />
            <div className={styles.cardIconsInformation}>
              <h3 className={styles.cardDescription}>Technologies</h3>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={react} alt="figma" />
              </div>
              <div className={styles.cardIcons}>
                <img loading="lazy" src={css} alt="figma" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

{
  {
    /*
     
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
      </a> */
  }
}
