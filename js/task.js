// class Task {
//     /**
//      * @param {Number} id :Taskのid
//      * @param {String} name :Task名
//      * @param {Date} deadline :Taskの締め切り
//      * @param {Number} time :Taskの所要時間(時間)
//      * @param {Boolean} auto_scheduled :自動スケジューリングするか
//      * @param {Boolean} duplicate :Taskの重複を許すか
//      * @param {Boolean} all_day :Taskが終日かどうか
//      * @param {Number} days
//      * @param {String} overview
//      * @param {Stirng} category
//      * @param {Boolean} favorite
//      */
//     constructor(id, name, deadline, time, auto_scheduled, duplicate, all_day, days, overview, category, favorite) {
//         this.id = id;
//         this.name = name;
//         this.deadline = deadline;
//         this.time = time;
//         this.auto_scheduled = auto_scheduled;
//         this.duplicate = duplicate;
//         this.all_day = all_day;
//         this.days = days;
//         this.overview = overview;
//         this.category = category;
//         this.favorite = favorite;
//         this.set_time = [deadline.getTime()-time*36000, deadline.getTime()];// start, endの時刻をECMAScript元期からの経過ミリ数で表す
//     }

//     get getId() {
//         return this.id;
//     }

//     get getName() {
//         return this.name;
//     }

//     get getDeadline() {
//         return this.deadline;
//     }

//     get getTime() {
//         return this.time;
//     }

//     get isAutoScheduled() {
//         return this.auto_scheduling;
//     }

//     get isDuplicate() {
//         return this.duplicate;
//     }

//     get isAllDay() {
//         return this.all_day;
//     }

//     get getDays() {
//         return this.days;
//     }

//     get getOverview() {
//         return this.overview;
//     }

//     get getCategory() {
//         return this.category;
//     }
    
//     get isFavorite() {
//         return this.favorite;
//     }

//     get getSetTime() {
//         return this.set_time;
//     }

//     /**
//      * @param {Number} id
//      */
//     set setId(id) {
//         this.id = id;
//     }
    
//     /**
//      * @param {String} name
//      */
//     set setName(name) {
//         this.name = name;
//     }

//     /**
//      * @param {Number} deadline
//      */
//     set setDeadline(deadline) {
//         this.deadline = deadline;
//         this.set_time[0] = deadline;
//     }

//     /**
//      * @param {Number} time
//      */
//     set setTime(time) {
//         this.time = time;
//         this.set_time[1] = time;
//     }

//     /**
//      * @param {Boolean} auto_scheduled
//      */
//     set setAutoScheduled(auto_scheduled) {
//         this.auto_scheduled = auto_scheduled;
//     }

//     /**
//      * @param {Boolean} duplicate
//      */
//     set setDuplicated(duplicate) {
//         this.duplicate = duplicate;
//     }

//     /**
//      * @param {Boolean} all_day
//      */
//     set setAllDay(all_day) {
//         this.all_day = all_day;
//     }

//     /**
//      * @param {Number} days
//      */
//     set setDays(days) {
//         this.days = days;
//     }

//     /**
//      * @param {String} overview
//      */
//     set setOverview(overview) {
//         this.overview = overview;
//     }

//     /**
//      * @param {String} category
//      */
//     set setCategory(category) {
//         this.category = category;
//     }

//     /**
//      * @param {Boolean} favorite
//      */
//     set setFavorite(favorite) {
//         this.favorite = favorite;
//     }
// }