import { makeAutoObservable } from "mobx";

class Store {
    startTime = "";
    transitionTime = 0;
    remainingTime = "";
    isTimerRun = false;
    isTimeCorrect = false;
    currentResults = {
        currentClicks: 0,
        currentBest: 0,
        currentAverage: 0,
    }
    
    constructor() {
        makeAutoObservable(this, {}, {deep: true});
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

    setStartTime = (value) => {
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

    changeStartTime = (value) => {
        this.startTime = value;
    }
        
    setIsTimerRun = (value) => {
         this.isTimerRun = value;
        console.log("isTimerRun " + this.isTimerRun);
    }

    changeIsTimeCorrect = (value) => {
        this.isTimeCorrect = value;
    }

    setCurrentClicks = (value) => {
        if(value !== 0) {
            this.currentResults.currentClicks ++;
        } else {
            this.currentResults.currentClicks = 0;
        }        
    }

    changeTransitionTime = (value) => {
        this.transitionTime = value;
    }

    setCurentBest = () => {
        if(this.currentClicks === 0) {
            
        }
    }
}

export default new Store();