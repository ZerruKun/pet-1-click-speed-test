import React from "react";
import styles from "./OtherButton.module.css"

const OtherButton = ({children, ...props}) => {
  return (
    <button {...props} className={styles.otherButton}>
        {children}
    </button>
  )
}

export default OtherButton;