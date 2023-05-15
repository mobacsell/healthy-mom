import { Button } from "../../../../../shared/Button";
import styles from "./Modal.module.css";

export function Modal() {
  return (
    <div className={styles.root}>
      <div className={styles.window}>
        <div className={styles.content}>
          <h2 className={styles.header}>Благодарим вас!</h2>
          <p className={styles.text}>
            В ближайшее время с Вами свяжется наш опреатор и ответит на все Ваши
            вопросы.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}
