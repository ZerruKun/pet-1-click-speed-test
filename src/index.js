import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import applicationContext from "./context";

const Application = () => {

  const [remainingTime, setRemainingTime] = useState(0);
  const [clickCount, setClickCount] = useState(0)

  return (
    // <React.StrictMode>
    <applicationContext.Provider value={{ remainingTime, setRemainingTime, clickCount, setClickCount}}>
      <App />
    </applicationContext.Provider>
    // </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
