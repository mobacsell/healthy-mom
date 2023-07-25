import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import styles from "./Header.module.css";
import { urls } from "./data";
import { HumburgerBtn } from "./HumburgerBtn/HumburgerBtn";

export function Header() {
  const [isShow, setIsShow] = useState(false);

  const handlerBtnBurgerClick = () => {
    setIsShow(!isShow);
    if (isShow) {
      document.body.style.overflowY = "visible";
      document.documentElement.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    }
  };

  return (
    <header className={styles.root}>
      <a href="/" className={styles.logo}>
        Здоровая мама
      </a>
      <ul className={styles.menu}>
        {urls.map((value, index) => {
          return (
            <li className={styles.item} key={`${index}_item`}>
              <a href={`#${value.link}`} className={styles.link}>
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
      <HumburgerBtn handlerBtnBurgerClick={handlerBtnBurgerClick} />
      <BurgerMenu
        urls={urls}
        isShow={isShow}
        changeModalStatus={handlerBtnBurgerClick}
      />
    </header>
  );
}
