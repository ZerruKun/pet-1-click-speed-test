import React from "react";
import styles from "../../styles/HeaderAndFooter.module.css";

const Header = () => {
  return (
    <header className={styles.background}>
      <h1 className={styles.text}>Проверка скорости клика</h1>
    </header>
  );
};

export default Header;