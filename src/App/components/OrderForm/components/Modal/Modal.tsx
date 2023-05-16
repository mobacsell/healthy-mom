import { Button } from "../../../../../shared/Button";
import styles from "./Modal.module.css";
import { ModalProps } from "./types";

export function Modal({ modal, changeModalStatus }: ModalProps) {
  return (
    <div className={`${styles.root} ${modal ? "" : styles["none"]}`}>
      <div className={styles.window}>
        <div className={styles.content}>
          <h2 className={styles.header}>Благодарим вас!</h2>
          <p className={styles.text}>
            В ближайшее время с Вами свяжется наш опреатор и ответит на все Ваши
            вопросы.
          </p>
        </div>
        <Button
          text="Ожидать звонка"
          action="statusModal"
          changeModalStatus={changeModalStatus}
        />
      </div>
    </div>
  );
}
