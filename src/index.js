import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import applicationContext from "./context";
import { BrowserRouter } from "react-router-dom";

const Application = () => {

  const [remainingTime, setRemainingTime] = useState(0);
  // const [tryNumber, setTryNumber] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [averageTime, setAverageTime] = useState(0);
  const [lastResults, setLastResults] = useState({tryNumber:0, count:0, best:0, average:0})
  // const [cps, setCps] = useState(0);

  return (
    // <React.StrictMode>
    <BrowserRouter>
      <applicationContext.Provider value={{ remainingTime, setRemainingTime, clickCount, setClickCount, lastTime, setLastTime, 
        bestTime, setBestTime, averageTime, setAverageTime, lastResults, setLastResults}}>
        <App />
      </applicationContext.Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />);
