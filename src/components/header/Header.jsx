import React, {memo} from "react";
import style from "./Header.module.css";

const Header = memo(() => {
  return (
    <div className={style.headerItem}>
      <h1>Welcome to the Click Speed Test!</h1>
    </div>
  );
});

export default Header;
