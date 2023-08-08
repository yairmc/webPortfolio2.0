import styles from "../styles/welcome.module.css";
import meImage from "../public/me.webp";

const welcome = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={meImage} alt="me" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div>
              <h1 className={styles.text}> Hello, I’m Yair Martinez</h1>

              <p className={styles.text}>I’m a full-stack web developer.</p>
              <hr color="#570A57" width="100%" />
              <hr color="#570A57" width="60%" />
              <hr color="#570A57" width="30%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default welcome;
