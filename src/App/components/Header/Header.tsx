import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.root}>
      <a href="/" className={styles.logo}>
        Здоровая мама
      </a>
      <ul className={styles.menu}>
        <li>
          <a href="/" className={styles.link}>
            Важность правильного питания
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Почему мы?
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Где заказать?
          </a>
        </li>
      </ul>
    </header>
  );
}
