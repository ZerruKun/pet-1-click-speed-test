import React, {memo} from "react";
import styles from "./Footer.module.css"

const Footer = memo(() => {
  return (
    <div className={styles.footerItem}>
      <h2>Здесь могла быть ваша реклама :)</h2>
    </div>
  );
});

export default Footer;
