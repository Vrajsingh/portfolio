import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      {/* Skills Row 1 (first 5) */}
      <div className={styles.skillRow}>
        {skills.slice(0, 5).map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>

      {/* Skills Row 2 (next 4) */}
      <div className={styles.skillRow}>
        {skills.slice(5, 10).map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>

      {/* History Row 1 */}
      <div className={styles.historyItem}>
        <img
          src={getImageUrl(history[0].imageSrc)}
          alt={`${history[0].organisation} Logo`}
        />
        <div className={styles.historyItemDetails}>
          <h3>{`${history[0].role}, ${history[0].organisation}`}</h3>
          <p>{`${history[0].startDate} - ${history[0].endDate}`}</p>
          <ul>
            {history[0].experiences.map((experience, id) => (
              <li key={id}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* History Row 2 */}
      <div className={styles.historyItem}>
        <img
          src={getImageUrl(history[1].imageSrc)}
          alt={`${history[1].organisation} Logo`}
        />
        <div className={styles.historyItemDetails}>
          <h3>{`${history[1].role}, ${history[1].organisation}`}</h3>
          <p>{`${history[1].startDate} - ${history[1].endDate}`}</p>
          <ul>
            {history[1].experiences.map((experience, id) => (
              <li key={id}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
