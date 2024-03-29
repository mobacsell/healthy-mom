import styles from "./Advantages.module.css";
import advantage from "@assets/advantages/advantageGirls.webp";
import { list } from "./data";

export function Advantages() {
  return (
    <section className={styles.root} id="advantages">
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={advantage}
            alt="Женщина с ребенком"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>
            Почему мамы
            <br />
            выбирают нашу доставку?
          </h2>
          <ul className={styles.list}>
            {list.map((value, index) => {
              return (
                <li className={styles.item} key={`${index}_item`}>
                  <div className={styles.itemWrapperImage}>
                    <img
                      src={value.imgUrl}
                      alt={value.imgText}
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemHeader}>{value.header}</h3>
                    <p className={styles.itemText}>{value.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
