class Settings{
    /**
     * {Number} unit_time :ユーザの単位時間(例:15分, 30分, 45分, 60分)
     */
    constructor() {
        this.unit_time = null;
    }
    
    setUnitTime(time) {
        this.unit_time = time*60*1000;
    }
}
