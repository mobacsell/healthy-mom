import styles from "./Promo.module.css";
import { Button } from "../../../shared/Button";
import { BannerSlider } from "./components/BannerSlider";

export function Promo() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.order}>
          <h1 className={styles.header}>
            Доставка здорового
            <br />
            питания для мам
          </h1>
          <p className={styles.paragraph}>
            Правильный и вкусный рацион
            <br />
            для Вас и вашего ребенка
          </p>
          <Button />
        </div>
        <BannerSlider />
      </div>
    </section>
  );
}
