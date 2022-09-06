import React from 'react'
import styles from "../../styles/HeaderAndFooter.module.css"
import vk from "../../img/vk.svg"
import github from "../../img/github.png"

const Footer = () => {
  return (
    <footer className={styles.background}>
      {console.log("отрендерился Footer")}
      <div className={styles.footerBlock}>
        <a href='https://vk.com/zellkun' target="_blank" rel="noreferrer">
          <img className={styles.socialImg} src={vk} alt="vk" />
        </a>
        <a href='https://github.com/ZerruKun' target="_blank" rel="noreferrer">
          <img className={styles.socialImg} src={github} alt="github" />
        </a>
      </div>
      <div className={styles.footerBlock}>
        <span className={styles.copyright}>2022 © Все права защищены</span>
      </div>
    </footer>
  )
}

export default Footer
