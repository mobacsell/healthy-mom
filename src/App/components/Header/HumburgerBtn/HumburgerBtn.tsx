import styles from "./HumburgerBtn.module.css";

export function HumburgerBtn({
  handlerBtnBurgerClick,
}: {
  handlerBtnBurgerClick: () => void;
}) {
  return (
    <div className={styles.btnBurger} onClick={handlerBtnBurgerClick}>
      <div className={styles.btnStrip}></div>
      <div className={styles.btnStrip}></div>
      <div className={styles.btnStrip}></div>
    </div>
  );
}
