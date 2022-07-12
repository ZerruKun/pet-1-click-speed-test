import React, {memo} from "react";
import styles from "./Footer.module.css"

const Footer = memo(() => {
  return (
    <div className={styles.footerItem}>
      <h2>Your ad could have been here</h2>
    </div>
  );
});

export default Footer;
