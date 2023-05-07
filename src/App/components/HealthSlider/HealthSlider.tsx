import Slider from "react-slick";
import styles from "./HealthSlider.module.css";
import { ItemData } from "./types";
import vegetables from "../../../assets/healthSlider/slider-vegetables.jpg";
import meat from "../../../assets/healthSlider/slider-meat.jpg";
import cheese from "../../../assets/healthSlider/slider-cheese.jpg";

export function HealthSlider() {
  const dataSlider: ItemData[] = [
    {
      url: vegetables,
      header: "Овощи",
      text: "брокколи, тыква, цветная капуста, репка, огурцы. Готовьте блюда из тушеных смесей без добавления масла.",
    },
    {
      url: meat,
      header: "Мясо",
      text: "Крольчатина, телятина, индейка, курица без кожи. Мясные блюда ежедневно должны присутствовать в питании в тушеном, запеченном или вареном виде.",
    },
    {
      url: cheese,
      header: "Продукты из молока",
      text: "Сыр, ряженка, простокваша, творог, йогурт без добавок, кефир. Желательно кушать их кормящей маме ежедневно либо через день.",
    },
    {
      url: vegetables,
      header: "Овощи",
      text: "брокколи, тыква, цветная капуста, репка, огурцы. Готовьте блюда из тушеных смесей без добавления масла.",
    },
    {
      url: meat,
      header: "Мясо",
      text: "Крольчатина, телятина, индейка, курица без кожи. Мясные блюда ежедневно должны присутствовать в питании в тушеном, запеченном или вареном виде.",
    },
    {
      url: cheese,
      header: "Продукты из молока",
      text: "Сыр, ряженка, простокваша, творог, йогурт без добавок, кефир. Желательно кушать их кормящей маме ежедневно либо через день.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 400,
    swipeToSlide: true,
    initialSlide: 0,
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          Обязательные продукты для здорового питания:
        </h2>
        <Slider {...settings}>
          {dataSlider.map((value) => {
            return (
              <div className={styles.itemWrapper}>
                <div className={styles.item}>
                  <img
                    src={value.url}
                    alt={value.header}
                    className={styles.itemImage}
                  />
                  <h3 className={styles.itemHeader}>{value.header}</h3>
                  <p className={styles.itemText}>{value.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
