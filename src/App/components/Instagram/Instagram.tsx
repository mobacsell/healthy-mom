import styles from "./Instagram.module.css";
import instagram from "../../../assets/instagram/instagramImages.webp";

export function Instagram() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Наш Instagram</h2>
        <p className={styles.text}>
          <a href="/" className={styles.instLink}>
            Подписывайтесь
          </a>
          , чтобы быть в курсе последних новостей
        </p>
        <div className={styles.imageWrapper}>
          <img
            src={instagram}
            alt="Подборка фото из Instagram"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
