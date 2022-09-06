import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import styles from "../../../../styles/Buttons.module.css";

const CstClickButton = observer(() => {
  const onButtonClick = () => {
    store.setCurentBest();
    store.setCurrentClicks();
    store.setCurrentAverage();
  };

  return (
    <button className={styles.clickButton} onClick={onButtonClick}>
      Клик!
    </button>
  );
});

export default CstClickButton;