import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:Mohabelgendyy@gmail.com">Mohabelgendyy@gmail.com</a>
        </li>
      </ul>

      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="http://www.linkedin.com/in/mohabelgendyy">
          linkedin.com/in/mohabelgendyy
        </a>
      </li>

      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="http://www.github.com/mohabelgendyy">
          github.com/mohabelgendyy
        </a>
      </li>
      <li className={styles.link}>
        <a href="Phone Number">#01014799878</a>
      </li>
    </section>
  );
};
