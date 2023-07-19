import styles from "./BannerSlider.module.css";
import { useState, useEffect } from "react";
import { CurrentItemType } from "./types";
import pregnant from "@assets/promo/bannerSlider/sliderBannerExpectant.webp";
import nursing from "@assets/promo/bannerSlider/sliderBannerNursing.webp";
import safeTreats from "@assets/promo/bannerSlider/sliderBannerSafeTreats.webp";
import rounds from "@assets/promo/bannerSlider/rounds.svg";

export function BannerSlider() {
  const [currentItem, setCurrentItem] = useState<CurrentItemType>({
    itemId: 0,
    itemText: "Для беременных",
    imgUrl: pregnant,
    imgText: "Беременная женщина",
    imgStyle: "pregnant",
  });

  const [isImgLoading, setIsImgLoading] = useState<boolean>(true);

  const itemList = [
    {
      itemId: 0,
      itemText: "Для беременных",
      imgUrl: pregnant,
      imgText: "Беременная женщина",
      imgStyle: "pregnant",
    },
    {
      itemId: 1,
      itemText: "Для кормящих",
      imgUrl: nursing,
      imgText: "Кормящая женщина",
      imgStyle: "nursing",
    },
    {
      itemId: 2,
      itemText: "Безопасные лакомства",
      imgUrl: safeTreats,
      imgText: "Женщина с яблоком",
      imgStyle: "safeTreats",
    },
  ];

  useEffect(() => {
    setIsImgLoading(false);
  }, [isImgLoading]);

  /**
   * Функция:
   * 1. Устанавливает новое состояние currentItem компонента BannerSlider.
   * 2. Меняет состояние isImgLoading на true.
   * @param status - объект с набором свойств - значение нового состояния currentItem компонента BannerSlider.
   */
  const handlerClick = (status: CurrentItemType) => {
    if (status.itemId !== currentItem.itemId) {
      setCurrentItem(status);
      setIsImgLoading(true);
    }
  };

  /**
   * Функция изменяет состояние currentItem компонента BannerSlider при клике на соответствующие кнопки в мобильной/планшетной адаптации компонента.
   * Для бесконечного слайдинга меняем индексацию в условной конструкции.
   * @param {string} direction - направление слайдинга - "right" или "left"
   */
  const handlerBtnClick = (direction: string) => {
    let index = currentItem.itemId;

    if (direction === "right") {
      index = index + 1 > 2 ? 0 : index + 1;
    } else if (direction === "left") {
      index = index - 1 < 0 ? 2 : index - 1;
    }

    handlerClick({
      itemId: itemList[index].itemId,
      itemText: itemList[index].itemText,
      imgUrl: itemList[index].imgUrl,
      imgText: itemList[index].imgText,
      imgStyle: itemList[index].imgStyle,
    });
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {itemList.map((value) => {
          return (
            <li
              className={styles.item}
              onClick={() => {
                handlerClick({
                  itemId: value.itemId,
                  itemText: value.itemText,
                  imgUrl: value.imgUrl,
                  imgText: value.imgText,
                  imgStyle: value.imgStyle,
                });
              }}
              key={value.itemId}
            >
              <span
                className={`${styles.itemText} ${
                  value.itemId === currentItem.itemId
                    ? styles.currentItemText
                    : ""
                }`}
              >
                {value.itemText}
              </span>
              <img
                src={rounds}
                alt="Окружности"
                className={styles.itemRounds}
              />
            </li>
          );
        })}
      </ul>
      <h2 className={styles.itemHeader}>{currentItem.itemText}</h2>
      <div className={styles.buttonsWrapper}>
        <div
          className={`${styles.sliderButton} ${styles.sliderButtonLeft}`}
          onClick={() => {
            handlerBtnClick("left");
          }}
        ></div>
        <div
          className={`${styles.sliderButton} ${styles.sliderButtonRight}`}
          onClick={() => {
            handlerBtnClick("right");
          }}
        ></div>
      </div>
      <img
        src={currentItem.imgUrl}
        alt={currentItem.imgText}
        className={
          isImgLoading ? styles.imageNone : styles[currentItem.imgStyle]
        }
      />
    </div>
  );
}
