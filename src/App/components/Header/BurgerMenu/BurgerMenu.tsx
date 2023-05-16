import styles from "./BurgerMenu.module.css";
import { BurgerMenuProps } from "./types";

export function BurgerMenu({
  urls,
  isShow,
  changeModalStatus,
}: BurgerMenuProps) {
  const wrapperStyle = styles.wrapper + (isShow ? " " + styles.isShow : "");

  return (
    <div className={wrapperStyle}>
      <ul className={styles.list}>
        {urls.map((value, index) => {
          return (
            <li className={styles.item} key={`${index}_item`}>
              <a
                href={`#${value.link}`}
                className={styles.link}
                onClick={changeModalStatus}
              >
                {value.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
