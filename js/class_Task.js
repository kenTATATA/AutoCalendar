class Task {
    /**
     * @param {Number} id :Taskのid
     * @param {String} name :Task名
     * @param {String} overview :メモ
     * @param {String} category :カテゴリー
     * @param {Boolean} favorite :お気に入り
     * @param {String} plan_or_task :予定かタスクか(内部では0,1で表す)
     * @param {Boolean} finished :終了済みか
     * @param {Boolean} duplicate :重複を許すか
     * @param {Date} deadline :Taskの締め切り時間
     * @param {Number} required_time :Taskの推定所要時間(時間)
     * @param {Number} days :何日に分けるか
     * @param {Boolean} auto_scheduled :自動スケジューリングするか
     * @param {List} specified_time :開始時間, 終了時間(入力は二次元配列で受け取り,内部では一次元配列で表す)
     */
    constructor(id, name, category, overview, favorite, plan_or_task, finished, duplicate, deadline, required_time, days, auto_scheduled, specified_time) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.overview = overview;
        this.favorite = favorite;
        
        // plan_or_taskは予定なら0,タスクなら1で表す
        if (plan_or_task == "Plan") {
            this.plan_or_task = 0;
        } else {
            this.plan_or_task = 1;
        }
        this.finished = finished;
        this.duplicate = duplicate;
        this.deadline = deadline;
        this.required_time = required_time*3600000;
        this.days = days;
        this.auto_scheduled = auto_scheduled;
        this.specified_time = specified_time;  // そのままの配列でもらう
        
        // 子タスクの配列
        this.task_children = [];
        this.start = new Date();  // 各分割タスクを行う日時の午前0時

        // 指定時間がnullでないときの処理
        if(this.specified_time != null) {
            // 時間が指定されていて推定所要時間が合計の指定時間より超えてしまうとき
            var restTime = required_time;
            for (var i = 0; i < this.specified_time.length; i++) {
                restTime = restTime - (this.specified_time[i][1] - this.specified_time[i][0]); 
            }
            if (restTime > 0) {
                throw new Error("この予定は指定時間が所要時間を満たさないため追加できません。");
            }

            this.auto_scheduled = false;
            this.days = 1;

            // specified_timeが複数あるとき
            if (this.specified_time.length > 1) {
                for (var i=0;i < this.specified_time.length; i++) {
                    var tmp = [this.specified_time[i][0],this.specified_time[i][1]];
                    var child = new Task(id, name, category, overview, favorite, plan_or_task, finished, duplicate, deadline, required_time, 1, auto_scheduled, tmp);
                    child.name = child.name + "(" + i + "/" + this.specified_time.length + ")";  // 線形代数(1/5)みたいな名前にする
                    this.task_children.push(child);
                }
            } else {
                // specified_timeが1つであるとき
                this.specified_time = [this.specified_time[0][0],this.specified_time[0][1]];
            }
        } else {
            this.specified_time = [(new Date()).getTime() + 600000, (new Date()).getTime() + this.required_time + 600000];
            // 指定時間がnullのときの処理
            if(this.days > 1) {
                for (var i=0; i < this.days; i ++) {
                    var child = new Task(id, name, category, overview, favorite, plan_or_task, finished, duplicate, deadline, required_time/this.days, 1, auto_scheduled, null);
                    child.name = child.name + "(" + (i+1) + "日目)";  // 線形代数(1日目)みたいな名前にする
                    this.task_children.push(child);
                }
            }
        }
    }
}
