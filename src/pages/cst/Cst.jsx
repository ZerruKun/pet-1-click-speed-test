import React from "react";
import CstClickButton from "../../components/cstClickButton/CstClickButton";
import CstInput from "../../components/cstInput/CstInput"
import CstCurrentResult from "../../components/cstCurrentResult/CstCurrentResult"
import CstLastTenResults from "../../components/cstLastTenResults/CstLastTenResults";

const Cst = () => {

  return (
    <div>
      {console.log("отрендерился Cst")}
      <h1>Я Cst</h1>
      <CstInput />
      <CstClickButton />
      <CstCurrentResult />
      <CstLastTenResults />
    </div>
  )
}

export default React.memo(Cst);
