import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";

const CurrentClicks = observer(() => {
  return <td>{store.currentResults.currentClicks}</td>;
});

export default CurrentClicks;