import styles from "./BurgerMenu.module.css";
import { BurgerMenuProps } from "./types";

export function BurgerMenu({ urls, isShow }: BurgerMenuProps) {
  const wrapperStyle = styles.wrapper + (isShow ? " " + styles.isShow : "");

  return (
    <div className={wrapperStyle}>
      <ul className={styles.list}>
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
    </div>
  );
}