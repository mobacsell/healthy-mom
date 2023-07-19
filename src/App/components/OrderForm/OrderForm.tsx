import { Button } from "@shared/Button";
import { Input } from "@shared/Input";
import styles from "./OrderForm.module.css";
import { Modal } from "./components/Modal";
import { useState } from "react";

export function OrderForm() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handlerKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const changeModalStatus = (): void => {
    setIsModal(!isModal);
    if (isModal) {
      document.body.style.overflowY = "visible";
      document.documentElement.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    }
  };

  return (
    <section className={styles.root} id="orderForm">
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Хотите получить персональное меню?</h2>
        <p className={styles.text}>
          Оставьте заявку и наш оператор свяжется с Вами для уточнения деталей
        </p>
        <form
          action="/"
          method="post"
          className={styles.form}
          onKeyDown={(event) => {
            handlerKeyDown(event);
          }}
        >
          <Input inputText="Ваше имя" />
          <Input inputText="Ваш телефон" />
          <Button
            text="Оформить заказ"
            action="statusModal"
            changeModalStatus={changeModalStatus}
          />
        </form>
      </div>
      <Modal modal={isModal} changeModalStatus={changeModalStatus} />
    </section>
  );
}
