import styles from "../styles/contact.module.css";

import fbIcon from "../public/contact/facebook.png";
import instaIcon from "../public/contact/insta.png";
import twitterIcon from "../public/contact/linked.png";
import linkedIcon from "../public/contact/twitter.png";
import pinterestIcon from "../public/contact/pinterest.png";
export const SocialNetworks = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        className={styles.socialNetwork}
        href="https://www.facebook.com/yair.mc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fbIcon} alt="icon" />
        <p>Facebook</p>
      </a>

      <a
        className={styles.socialNetwork}
        href="https://www.instagram.com/yairboxmartinez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instaIcon} alt="icon" />
        <p>Instagram</p>
      </a>
      <a
        className={styles.socialNetwork}
        href="https://twitter.com/yairmc666"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterIcon} alt="icon" />
        <p>Twitter</p>
      </a>
      <a
        className={styles.socialNetwork}
        href="https://www.linkedin.com/in/yair-martinez-278097245/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIcon} alt="icon" />
        <p>LinkedIn</p>
      </a>
      <a
        className={styles.socialNetwork}
        href="https://www.pinterest.com.mx/yair_mc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pinterestIcon} alt="icon" />
        <p>Pinterest</p>
      </a>
    </div>
  );
};
