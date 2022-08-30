import { makeAutoObservable } from "mobx";

class Store {
    startTime = ""; // начальное время, которое будет уменьшаться после нажатия на "Старт" 
    transitionTime = 0; // промежуточное значение таймера для вычислений
    initialTime = 0; // значение начального времени для вычислений
    isTimerRun = false; // Запущен ли таймер
    isTimeCorrect = false; //Для проверки возможности старта, блокирует нажатие кнопки "Старт"
    currentResults = {
        currentClicks: 0,
        currentBest: 0,
        currentAverage: 0,
    } // Соответствующие результаты в первой таблице
    lastResults = {
        tryCount: 0,
        startCount: 0,
        clickCount: 0,
        bestClick: 0,
        averageClick: 0,
        csp: 0
    }
    
    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    //Вспомогательная функция для проверки на число. Тип "number" не блокирует введение "-", "e" "." и ","

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

    // Первоначальная установка стартового времени

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

    // Изменение стартового времени

    changeStartTime = (value) => {
        this.startTime = value;
    }

    // Установка флага для проверки запущен ли таймер
        
    setIsTimerRun = (value) => {
         this.isTimerRun = value;
        console.log("isTimerRun " + this.isTimerRun);
    }

    // Установка флага для проверки будет ли доступ к кнопке "Старт"

    changeIsTimeCorrect = (value) => {
        this.isTimeCorrect = value;
    }

    // Установка значения количества кликов на текущей попытке

    setCurrentClicks = (value) => {
        if(value !== 0) {
            this.currentResults.currentClicks ++;
        } else {
            this.currentResults.currentClicks = 0;
        }        
    }

    // Изменение промежуточного значения таймера для вычислений

    changeTransitionTime = (value) => {
        this.transitionTime = value;
    }

    // Установка значения лучшего клика на текущей попытке

    setCurentBest = () => {
        if(this.currentResults.currentClicks >= 1) {
            let forComparison = ((this.transitionTime - this.startTime).toFixed(2));
            if(forComparison < this.currentResults.currentBest) {
                this.currentResults.currentBest = forComparison;
            }
            this.transitionTime = this.startTime;
        } else {
            this.currentResults.currentBest = ((this.transitionTime - this.startTime).toFixed(2));
            this.transitionTime = this.startTime;
        }
    }

    // Изменение значения начального времени

    changeInitialTime = (value) => {
        this.initialTime = value;
    }

    // Установка значения средней скорости кликов на текущей попытке

    setCurrentAverage = () => {
        this.currentResults.currentAverage = 
        ((this.initialTime - this.startTime) / this.currentResults.currentClicks).toFixed(2);
    }

    //Счётчик попыток

    changeTryCount = () => {
        this.lastResults.tryCount++;
    }

    // Изменение объекта, хранящего результаты последней попытки, которые будут добавлены в таблицу
    // с последними десятью результатами

    setLastResults = (startCount, clickCount, bestClick, averageClick) => {
        let cps = ((clickCount/startCount).toFixed(2));
        this.lastResults.startCount = startCount;
        this.lastResults.clickCount = clickCount;
        this.lastResults.bestClick = bestClick;
        this.lastResults.averageClick = averageClick;
        this.lastResults.csp = cps;
    }


}

export default new Store();