import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {skills.map((skill, index) => {
          const historyItem = history[index];

          return (
            <div key={index} className={styles.row}>
              {/* Skill Block */}
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>

              {/* History Block */}
              {historyItem && (
                <div className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>
                      {historyItem.role}, {historyItem.organisation}
                    </h3>
                    <p>
                      {historyItem.startDate} - {historyItem.endDate}
                    </p>
                    <ul>
                      {historyItem.experiences.map((exp, expId) => (
                        <li key={expId}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
