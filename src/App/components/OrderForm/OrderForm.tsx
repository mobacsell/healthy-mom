import { Button } from "../../../shared/Button";
import { Input } from "../../../shared/Input";
import styles from "./OrderForm.module.css";
import { Modal } from "./components/Modal";

export function OrderForm() {
  const handlerKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <section className={styles.root}>
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
          <Button />
        </form>
      </div>
      <Modal />
    </section>
  );
}
