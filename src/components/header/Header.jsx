import React, {memo} from "react";
import style from "./Header.module.css";

const Header = memo(() => {
  return (
    <div className={style.headerItem}>
      <h1>Узнайте свой КПС</h1>
    </div>
  );
});

export default Header;
