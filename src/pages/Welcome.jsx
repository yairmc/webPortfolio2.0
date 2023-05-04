import styles from "../styles/welcome.module.css";

const welcome = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.card}>
          <p className={styles.text}>
            Hello, i’m Yair Martinez. I’m a full-stack web developer.
          </p>
        </div>
      </div>
    </>
  );
};

export default welcome;
