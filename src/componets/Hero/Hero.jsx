import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohab</h1>
        <p className={styles.description}>
          I'm a full stack developer with 1 year experience using C++, React and
          NodeJS. Reach out if you'd like to learn more!!{" "}
        </p>
        <a
          href="mail to: Mohabelgendyy@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/header-img.svg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />

      <div className={styles.bottomBlur} />
    </section>
  );
};
