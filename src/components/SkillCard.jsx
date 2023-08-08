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
  figma,
  tailwind,
  bootstrap,
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
    figma,
    tailwind,
    bootstrap,
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
