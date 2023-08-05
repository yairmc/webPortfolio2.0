import { DesignCards } from "../components/DesignCards";
import styles from "../styles/designs.module.css";

export const Designs = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>Designs</p>
        </div>
        <h2 className={styles.descriptionPage}>
          Designs of web pages or mobile applications that have been requested
          for independent works and some personal
        </h2>
        <DesignCards />
      </div>
    </>
  );
};
