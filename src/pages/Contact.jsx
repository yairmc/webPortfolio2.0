import { SocialNetworks } from "../components/SocialNetworks";
import styles from "../styles/contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_cuzy2d2",
        "template_zjfc65a",
        event.target,
        "Wx8aufnrcDSow2smD"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>Contact</p>
        </div>
        <div className={styles.contactContainer}>
          <SocialNetworks />
          <form className={styles.form} onSubmit={sendEmail}>
            <p>Would you be interested in contacting me?</p>
            <input
              className={styles.input}
              type="text"
              name="userName"
              placeholder="Name"
            />
            <input
              className={styles.input}
              type="text"
              name="userEmail"
              placeholder="E-mail"
            />
            <textarea
              className={styles.message}
              type="text"
              name="userMessage"
              placeholder="Message"
              cols="30"
              rows="7"
            />
            <hr />
            <button className={styles.send}>Send Message</button>
          </form>
        </div>
        <footer className={styles.footer}>
          <p>@2023 Frontend Developer | All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
