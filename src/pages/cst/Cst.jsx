import React from "react";
import CstClickButton from "./cstClickButton/CstClickButton";
import CstInput from "./cstInput/CstInput"

const Cst = () => {

  return (
    <div>
      {console.log("отрендерился Cst")}
      <h1>Я Cst</h1>
      <CstInput />
      <CstClickButton />
    </div>
  )
}

export default React.memo(Cst);
