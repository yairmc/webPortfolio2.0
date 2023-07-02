import ReactPlayer from "react-player";
import styles from "../styles/welcome.module.css";
import video from "../public/video/mancha.mp4";

const welcome = () => {
  return (
    <>
      <div className={styles.content}>
        <ReactPlayer
          url={video}
          playing
          loop
          className={styles.miVideo}
          width="max-content"
          height="fit-content"
        />
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
