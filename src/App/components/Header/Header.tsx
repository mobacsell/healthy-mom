import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import styles from "./Header.module.css";

export function Header() {
  const [isShow, setIsShow] = useState(false);

  const urls = [
    {
      text: "Важность правильного питания",
      url: "/",
    },
    {
      text: "Почему мы?",
      url: "/",
    },
    {
      text: "Где заказать?",
      url: "/",
    },
  ];

  const handlerBtnBurgerClick = () => {
    setIsShow(!isShow);
    if (isShow) {
      document.body.style.overflow = "visible";
      document.documentElement.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  };

  return (
    <header className={styles.root}>
      <a href="/" className={styles.logo}>
        Здоровая мама
      </a>
      <ul className={styles.menu}>
        {urls.map((value) => {
          return (
            <li className={styles.item}>
              <a href={value.url} className={styles.link}>
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.btnBurger} onClick={handlerBtnBurgerClick}>
        <div className={styles.btnStrip}></div>
        <div className={styles.btnStrip}></div>
        <div className={styles.btnStrip}></div>
      </div>
      <BurgerMenu urls={urls} isShow={isShow} />
    </header>
  );
}
