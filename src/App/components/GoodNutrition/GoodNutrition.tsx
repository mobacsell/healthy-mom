import styles from "./GoodNutrition.module.css";
import image from "../../../assets/goodNutrition/nutritionist.png";

export function GoodNutrition() {
  const itemList = [
    "Здоровый ребенок",
    "Повышение иммунитета",
    "Поддержание фигуры",
    "Отстутствие вредных компонентов",
    "Снижение нагрузки на органы пищеварения",
  ];

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="женщина с овощами" className={styles.image} />
          <div className={styles.imageDescription}>
            <h3 className={styles.imageTitle}>Иванова Надежда Александровна</h3>
            <p className={styles.imageText}>Сертифицированный диетолог</p>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>
            Почему Вам нужно правильно питаться?
          </h2>
          <ul className={styles.list}>
            {itemList.map((value, index) => {
              return <li className={styles.item} key={`item_${index}`}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
