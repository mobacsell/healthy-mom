import styles from "./Footer.module.css";

export function Footer() {
  const listMenu = [
    {
      text: "Важность правильного питания",
      url: "/",
    },
    {
      text: "Почему мы?",
      url: "/",
    },
    {
      text: "Где заказать?",
      url: "/",
    },
  ];

  const listService = [
    {
      text: "Политика конфиденциальности",
      url: "/",
    },
    {
      text: "Условия онлайн-использования",
      url: "/",
    },
  ];

  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          Здоровая мама
        </a>
        <ul className={styles.listMenu}>
          {listMenu.map((value, index) => {
            return (
              <li className={styles.itemMenu} key={`${index}_item`}>
                <a href={value.url} className={styles.link}>
                  {value.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className={styles.listService}>
          {listService.map((value, index) => {
            return (
              <li className={styles.itemService} key={`${index}_item`}>
                <a href={value.url} className={styles.link}>
                  {value.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
