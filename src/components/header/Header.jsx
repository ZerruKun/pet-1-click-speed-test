import React, {memo} from "react";
import style from "./Header.module.css";

const Header = memo(() => {
  return (
    <div className={style.headerItem}>
      <h1>Тест скорости клика</h1>
    </div>
  );
});

export default Header;
