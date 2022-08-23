import { makeAutoObservable } from "mobx";

class Time {
    startTime = ""
    isTimerRun = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    isRealNumber = (num) => {
        if (
          num === "0" ||
          num === "1" ||
          num === "2" ||
          num === "3" ||
          num === "4" ||
          num === "5" ||
          num === "6" ||
          num === "7" ||
          num === "8" ||
          num === "9"
        ) {
          return true;
        }
    };

    setStartTime(value) {
        if(value > 120) {
            value = 120;
        } else if (value === "0") {
            value = "";
        } else {
            let time = [...value];
            let filteredTime = time.filter(this.isRealNumber);
            value = filteredTime.join("");
        }
        this.startTime = value;
    }
}

export default new Time();