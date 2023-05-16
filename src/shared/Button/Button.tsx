import styles from "./Button.module.css";
import vector from "../../assets/button/Vector.svg";
import { ButtonProps } from "./types";

export function Button({ text, action, changeModalStatus }: ButtonProps) {
  const hanldlerClick = () => {
    switch (action) {
      case "goto":
        window.scrollBy({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        break;
      case "statusModal":
        changeModalStatus();
        break;
    }
  };

  return (
    <button
      className={styles.root}
      onClick={(event) => {
        event.preventDefault();
        hanldlerClick();
      }}
    >
      {text}
      <div className={styles.circle}>
        <img src={vector} alt="стрелка вправо" />
      </div>
    </button>
  );
}
