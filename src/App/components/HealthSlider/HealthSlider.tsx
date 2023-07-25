import Slider from "react-slick";
import styles from "./HealthSlider.module.css";
import { dataSlider } from "./data";

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
