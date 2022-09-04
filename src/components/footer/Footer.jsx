import React from 'react'
import styles from "../../styles/HeaderAndFooter.module.css"

const Footer = () => {
  return (
    <footer className={styles.background}>
      {console.log("отрендерился Footer")}
      <h3 className={styles.text}>Я Footer</h3>
    </footer>
  )
}

export default Footer
