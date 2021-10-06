import React from "react";
import styles from "./SmallCard.module.css";

const SmallCard = () => {
  return (
    <div className={styles.smallCard_wrapper}>
      <div className={styles.smallCard}>
        <div>
          <h3>Connect With Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptas deserunt beatae adipisci iusto totam placeat corrupti
            ipsum, tempora
          </p>
          <div className={styles.btn}>
            <div class="action-button">
              <button class="action-button-bg">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
