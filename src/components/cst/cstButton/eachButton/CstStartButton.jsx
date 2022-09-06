import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import styles from "../../../../styles/Buttons.module.css";

const CstStartButton = observer(() => {
  const onButtonClick = () => {
    store.setIsTimerRun(true);
    store.changeTransitionTime(store.startTime);
    store.changeInitialTime(store.startTime);
  };

  return (
    <button
      className={styles.startButton}
      disabled={store.isTimeCorrect === false}
      onClick={onButtonClick}>
      Старт
    </button>
  );
});

export default CstStartButton;