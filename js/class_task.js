class Task {
    /**
     * @param {Number} id :Taskのid
     * @param {String} name :Task名
     * @param {Date} deadline :Taskの締め切り
     * @param {Number} required_time :Taskの所要時間(時間)
     * @param {Boolean} auto_scheduled :自動スケジューリングするか
     * @param {Boolean} duplicate :Taskの重複を許すか
     * @param {Boolean} all_day :Taskが終日かどうか
     * @param {Number} days :何日間
     * @param {String} overview :概要
     * @param {Stirng} category :カテゴリー
     * @param {Boolean} favorite :お気に入り
     */
    constructor(id, name, deadline, required_time, auto_scheduled, duplicate, all_day, days, overview, category, favorite) {
        this.id = id;
        this.name = name;
        this.deadline = deadline.getTime();
        this.required_time = required_time*3600000;
        this.auto_scheduled = auto_scheduled;
        this.duplicate = duplicate;
        this.all_day = all_day;
        this.days = days;
        this.overview = overview;
        this.category = category;
        this.favorite = favorite;
        var now = new Date();
        this.specified_time = [now.getTime(), now.getTime() + this.required_time];  // start, endの時刻をECMAScript元期からの経過ミリ数で表す
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getDeadline() {
        return this.deadline;
    }

    get getRequiredTime() {
        return this.required_time;
    }

    get isAutoScheduled() {
        return this.auto_scheduling;
    }

    get isDuplicate() {
        return this.duplicate;
    }

    get isAllDay() {
        return this.all_day;
    }

    get getDays() {
        return this.days;
    }

    get getOverview() {
        return this.overview;
    }

    get getCategory() {
        return this.category;
    }
    
    get isFavorite() {
        return this.favorite;
    }

    get getStartTime() {
        return this.specified_time[0];
    }

    get getEndTime() {
        return this.specified_time[1];
    }

    /**
     * @param {Number} id
     */
    set setId(id) {
        this.id = id;
    }
    
    /**
     * @param {String} name
     */
    set setName(name) {
        this.name = name;
    }

    /**
     * @param {Number} deadline
     */
    set setDeadline(deadline) {
        this.deadline = deadline;
    }

    /**
     * @param {Number} time
     */
    set setRequiredTime(time) {
        this.required_time = time;
    }

    /**
     * @param {Boolean} auto_scheduled
     */
    set setAutoScheduled(auto_scheduled) {
        this.auto_scheduled = auto_scheduled;
    }

    /**
     * @param {Boolean} duplicate
     */
    set setDuplicated(duplicate) {
        this.duplicate = duplicate;
    }

    /**
     * @param {Boolean} all_day
     */
    set setAllDay(all_day) {
        this.all_day = all_day;
    }

    /**
     * @param {Number} days
     */
    set setDays(days) {
        this.days = days;
    }

    /**
     * @param {String} overview
     */
    set setOverview(overview) {
        this.overview = overview;
    }

    /**
     * @param {String} category
     */
    set setCategory(category) {
        this.category = category;
    }

    /**
     * @param {Boolean} favorite
     */
    set setFavorite(favorite) {
        this.favorite = favorite;
    }

    /**
     *  @param {Number} start
     */
    set setStartTime(start) {
        this.specified_time[0] = start;
    }

    /**
     *  @param {Number} end
     */
    set setEndTime(end) {
        this.specified_time[1] = end;
    }

    /**
     * @param {Number} start
     */
    set setSpecifiedTime(start) {
        this.setStartTime(start);
        this.setEndTime(start + this.required_time);
    }
}