import Slider from "react-slick";
import styles from "./HealthSlider.module.css";
import { ItemData } from "./types";
import vegetables from "../../../assets/healthSlider/sliderVegetables.jpg";
import meat from "../../../assets/healthSlider/sliderMeat.jpg";
import cheese from "../../../assets/healthSlider/sliderCheese.jpg";

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

export function HealthSlider() {
  /**
   * Настройки для слайдера React Slick:
   * infinite - бесконечный слайдер
   * centerMode, centerPadding - текущий слайдер по центру, боковые паддинги для слайдера
   * sliderToShow - количество слайдов для отображения
   * speed - скорость слайдера
   * swipeToSlide - возможность перематывать слайдер мышкой
   * responsive - адаптация слайдера под разрешение экрана (breakpoint)
   */
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 700,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          centerPadding: "110px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          centerPadding: "70px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.root}>
      <h2 className={styles.header}>
        Обязательные продукты
        <br />
        для здорового питания:
      </h2>
      <Slider {...settings}>
        {dataSlider.map((value, index) => {
          return (
            <div className={styles.item} key={`${index}_item`}>
              <img
                src={value.url}
                alt={value.header}
                className={styles.itemImage}
              />
              <h3 className={styles.itemHeader}>{value.header}</h3>
              <p className={styles.itemText}>{value.text}</p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
