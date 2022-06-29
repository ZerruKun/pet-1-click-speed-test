import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import applicationContext from "./context";

const Application = () => {

  const [startTime, setStartTime] = useState("");

  return (
    // <React.StrictMode>
    <applicationContext.Provider value={{ startTime, setStartTime}}>
      <App />
    </applicationContext.Provider>
    // </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
