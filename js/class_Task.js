class Task {
    /**
     * @param {Number} id :Taskのid
     * @param {String} name :Task名
     * @param {String} overview :メモ
     * @param {String} category :カテゴリー
     * @param {Boolean} favorite :お気に入り
     * @param {String} plan_or_task :Plan,Task
     * @param {Boolean} finished :終了済みか
     * @param {Boolean} duplicate :重複を許すか
     * @param {Date} deadline :Taskの締め切り時間
     * @param {Number} required_time :Taskの推定所要時間(時間)
     * @param {Number} days :何日に分けるか
     * @param {Boolean} auto_scheduled :自動スケジューリングするか
     * @param {List} specified_time :開始時間, 終了時間
     */
    constructor(id, name, category, overview, favorite, plan_or_task, finished, duplicate, deadline, required_time, days, auto_scheduled, specified_time) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.overview = overview;
        this.favorite = favorite;
        this.plan_or_task = plan_or_task;
        this.finished = finished;
        this.duplicate = duplicate;
        this.deadline = deadline;
        this.required_time = required_time*3600000; //required_timeの入力がnullのとき0になるけど大丈夫？
        this.days = days;
        this.auto_scheduled = auto_scheduled;
        this.specified_time = specified_time;  // そのままの配列でもらう
        
        var now = new Date(); // 現在時刻
        //this.specified_time = [now.getTime(), now.getTime() + this.required_time];  
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
