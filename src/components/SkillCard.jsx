import styles from "../styles/about.module.css";
import {
  html,
  css,
  javascript,
  react,
  docker,
  git,
  mysql,
  postgres,
  typescript,
  node,
  nest,
  mongodb,
} from "../public/about/";

export const SkillCard = () => {
  const arr = [
    html,
    css,
    javascript,
    react,
    docker,
    git,
    mysql,
    postgres,
    typescript,
    node,
    nest,
    mongodb,
  ];
  return (
    <>
      {arr.map((item) => (
        <div key={item} className={styles.skillCard}>
          <img loading="lazy" src={item} alt={item} />
        </div>
      ))}
    </>
  );
};
