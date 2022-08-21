import { makeAutoObservable } from "mobx";

class Time {
    startTime = ""
    constructor() {
        makeAutoObservable(this);
    }

    setStartTime(value) {
        this.startTime = value;
    }
}

export default new Time();