import styles from "../styles/projects.module.css";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>projects</p>
        </div>
        <h2 className={styles.descriptionPage}>
          Functional projects carried out 2022-2023
        </h2>
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
