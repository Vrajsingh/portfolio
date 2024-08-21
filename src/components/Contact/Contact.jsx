import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vishalrajput97084@gmail.com">vishalrajput97084@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vishal-raj-a685b0175/">linkedin.com/vishalraj</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Vrajsingh">github.com/Vrajsingh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Mobile icon" />
          <a href="">+91 7004960929</a>
        </li>
      </ul>
    </footer>
  );
};
