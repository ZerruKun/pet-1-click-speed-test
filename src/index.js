import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./components/styles/index.css";
import App from "./App";
import applicationContext from "./components/context/context";
import { BrowserRouter } from "react-router-dom";

const Application = () => {

  const [remainingTime, setRemainingTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [averageTime, setAverageTime] = useState(0);
  const [lastResults, setLastResults] = useState({tryNumber:0, start:0, count:0, best:0, average:0, cps:0})

  return (
    <BrowserRouter>
      <applicationContext.Provider value={{ remainingTime, setRemainingTime, clickCount, setClickCount, lastTime, setLastTime, 
        bestTime, setBestTime, averageTime, setAverageTime, lastResults, setLastResults}}>
        <App />
      </applicationContext.Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
