import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import CstStartButton from "./eachButton/CstStartButton";
import CstClickButton from "./eachButton/CstClickButton";

const CstButton = observer(() => {
  return (
    <div>{store.isTimerRun ? <CstClickButton /> : <CstStartButton />}</div>
  );
});

export default CstButton;