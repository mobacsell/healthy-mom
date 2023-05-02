import React from "react";
import styles from "./BannerSlider.module.css";
import { useState } from "react";

export function BannerSlider() {
  const [currentItem, setCurrentItem] = useState<string>("pregnant");

  const handlerClick = (status: string) => {
    setCurrentItem(status);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={(event) => {
            handlerClick("pregnant");
          }}
        >
          <span>Для беременных</span>
          <div className={styles.itemRounds}></div>
        </li>
        <li
          className={styles.item}
          onClick={(event) => {
            handlerClick("nursing");
          }}
        >
          <span>Для кормящих</span>
          <div className={styles.itemRounds}></div>
        </li>
        <li
          className={styles.item}
          onClick={(event) => {
            handlerClick("safeTreats");
          }}
        >
          <span>Безопасные лакомства</span>
          <div className={styles.itemRounds}></div>
        </li>
      </ul>
      <div className={styles[currentItem]}></div>
    </div>
  );
}
