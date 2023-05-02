import React from "react";
import styles from "./GoodNutrition.module.css";
import image from "../../../assets/goodNutrition/nutritionist.png";

export function GoodNutrition() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <img src={image} alt="женщина с овощами" className={styles.image} />
        <div className={styles.content}>
          <h1 className={styles.header}>
            Почему Вам нужно правильно питаться?
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}>Здоровый ребенок</li>
            <li className={styles.item}>Повышение иммунитета</li>
            <li className={styles.item}>Поддержание фигуры</li>
            <li className={styles.item}>Отстутствие вредных компонентов </li>
            <li className={styles.item}>
              Снижение нагрузки на органы пищеварения
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <h1 className={styles.name}>Иванова Надежда Александровна</h1>
          <p className={styles.paragraph}>Сертифицированный диетолог</p>
        </div>
      </div>
    </section>
  );
}
