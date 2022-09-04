import React from "react";
import styles from "../../styles/HeaderAndFooter.module.css"

const Header = () => {
  return (
    <header className={styles.background}>
      {console.log("отрендерился Header")}
      <h1 className={styles.text}>Простой тест скорости клика</h1>
    </header>
  )
}

export default Header
