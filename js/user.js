// import {Task} from "./task.js"  // これが上手くいかない..
import { task1 } from "./getData.js"; // これが上手くいかない..
// import {Task} from "/Users/NEC-PCuser/AutoCalendar-prototype2/AutoCalendar-prototype2/js/task.js"
class User {
  /**
   * @param {String} name :ユーザー名
   * @param {Schedule} lifestyle :定例スケジュール
   * @param {Schedule} schedule :スケジュール
   * @param {Settings} settings :設定
   */
  constructor(name, lifestyle, schedule, settings) {
    this.name = name;
    this.lifestyle = lifestyle;
    this.schedule = schedule;
    this.settings = settings;
  }
}

class Task {
  /**
   * @param {Number} id :Taskのid
   * @param {String} name :Task名
   * @param {String} overview :メモ
   * @param {String} category :カテゴリー
   * @param {Boolean} favorite :お気に入り
   * @param {Number} plan_or_task :予定かタスクか
   * @param {Boolean} finished :終了済みか
   * @param {Boolean} duplicate :重複を許すか
   * @param {Date} deadline :Taskの締め切り時間
   * @param {Number} required_time :Taskの推定所要時間(時間)
   * @param {Number} days :何日に分けるか
   * @param {Boolean} auto_scheduled :自動スケジューリングするか
   * @param {List} specified_time :開始時間, 終了時間
   */
  constructor(
    id,
    name,
    category,
    overview,
    favorite,
    plan_or_task,
    finished,
    duplicate,
    deadline,
    required_time,
    days,
    auto_scheduled,
    specified_time
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.overview = overview;
    this.favorite = favorite;
    this.plan_or_task = plan_or_task;
    this.finished = finished;
    this.duplicate = duplicate;
    this.deadline = deadline.getTime();
    this.required_time = required_time * 3600000;
    this.days = days;
    this.auto_scheduled = auto_scheduled;
    this.specified_time = specified_time; // そのままの配列でもらう

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

class Schedule {
  constructor() {
    // this.time_series_tasks = []; // 時系列なTask
    this.auto_schedule = []; //自動スケジューリングするTask
    this.on_time = []; //時間が決まっているTask,予定
    this.other_tasks = []; // 重複を許すTask
    this.all_tasks = []; // 全てのTask
  }

  AutoScheduling() {
    //締め切り順でソート
    this.auto_schedule.sort(function (a, b) {
      if (a.deadline === null) {
        return 1;
      }

      if (b.deadline === null) {
        return -1;
      }

      if (a.deadline === b.deadline) {
        return 0;
      }

      return a.deadline < b.deadline ? -1 : 1;
    });
    this.auto_schedule[0].specified_time[0][0] = new Date().getTime();
    this.auto_schedule[0].specified_time[0][1] =
      this.auto_schedule[0].specified_time[0][0] +
      this.auto_schedule[0].required_time;
    // 指定時間の変更
    var j = 0;
    for (var i = 0; i < this.auto_schedule.length; i++) {
      for (; j < this.on_time.length; j++) {
        for (var k = 0; k < this.on_time[j].specified_time.length; k++) {
          if (
            this.auto_schedule[i].specified_time[0][1] <=
            this.on_time[j].specified_time[k][0]
          ) {
            break;
          }
          if (
            (this.on_time[j].specified_time[k][0] >=
              this.auto_schedule[i].specified_time[0][0] &&
              this.on_time[j].specified_time[k][0] <
                this.auto_schedule[i].specified_time[0][1]) || // スタートをまたいでいないか?
            (this.on_time[j].specified_time[k][1] >
              this.auto_schedule[i].specified_time[0][0] &&
              this.on_time[j].specified_time[k][1] <=
                this.auto_schedule[i].specified_time[0][1]) || // エンドまたいでいないか?
            (this.on_time[j].specified_time[k][0] <=
              this.auto_schedule[i].specified_time[0][0] &&
              this.on_time[j].specified_time[k][1] >=
                this.auto_schedule[i].specified_time[0][1]) || // 元からある予定の間にすっぽり埋もれていないか?
            (this.on_time[j].specified_time[k][0] >
              this.auto_schedule[i].specified_time[0][0] &&
              this.on_time[j].specified_time[k][1] >=
                this.auto_schedule[i].specified_time[0][1])
          ) {
            // 元からある予定をすっぽり埋れさせていないか?
            this.auto_schedule[i].specified_time[0][0] =
              this.on_time[j].specified_time[k][1] + 10 * 60 * 1000; // 10分の休憩を持たせておく.
            this.auto_schedule[i].specified_time[0][1] =
              this.auto_schedule[i].specified_time[0][0] +
              this.auto_schedule[i].required_time;
          }
        }
      }
      // 予定を入れれなかったときに問題が出る
      // 予定を入れれたら実行
      if (i + 1 < this.auto_schedule.length) {
        this.auto_schedule[i + 1].specified_time[0][0] =
          this.auto_schedule[i].specified_time[0][1] + 10 * 60 * 1000; // 10分の休憩を持たせておく.
        this.auto_schedule[i + 1].specified_time[0][1] =
          this.auto_schedule[i + 1].specified_time[0][0] +
          this.auto_schedule[i + 1].required_time;
      }
      if (
        this.auto_schedule[i].specified_time[0][1] >
        this.auto_schedule[i].deadline
      ) {
        console.log(
          "この予定「" +
            this.auto_schedule[i].name +
            "」は締め切りを過ぎてしまいます"
        );
      }
      if (j > 0) {
        j--;
      }
      // console.log("タスク名: " + this.auto_schedule[i].name + "\n開始時刻 = " + (new Date(this.auto_schedule[i].specified_time[0][0])).toString() + "\n終了時刻 = " + (new Date(this.auto_schedule[i].specified_time[0][1])).toString());
    }
  }

  // タスクをスケジュールに追加するモジュール
  /**
   * @param {Task} task
   */
  addTask(task) {
    // タスクの終了時刻が締め切り時刻を過ぎている場合には, エラー
    if (task.plan_or_task && task.specified_time[0][1] > task.deadline) {
      console.log("締め切り過ぎたよ！！！");
    }

    // タスクを時系列なTaskに入れる処理
    if (task.auto_scheduled) {
      // 自動スケジューリングをする処理
      this.auto_schedule.push(task);
      this.AutoScheduling();
    } else if (!task.duplicate) {
      // 自動スケジューリングをしない処理
      // 入れる予定の時間に重複していなければ入れる
      try {
        for (var i = 0; i < this.on_time.length; i++) {
          for (var j = 0; j < this.on_time[i].specified_time.length; j++) {
            if (
              (this.on_time[i].specified_time[j][0] >=
                task.specified_time[0][0] &&
                this.on_time[i].specified_time[j][0] <
                  task.specified_time[0][1]) || // スタートをまたいでいないか?
              (this.on_time[i].specified_time[j][1] >
                task.specified_time[0][0] &&
                this.on_time[i].specified_time[j][1] <=
                  task.specified_time[0][1]) || // エンドまたいでいないか?
              (this.on_time[i].specified_time[j][0] <=
                task.specified_time[0][0] &&
                this.on_time[i].specified_time[j][1] >=
                  task.specified_time[0][1])
            ) {
              // 元からある予定の間にすっぽり埋もれていないか?
              throw new Error("この予定は追加できません。");
            }
          }
        }
        // 重複していないので入れる
        this.on_time.push(task);
        // 指定時間順でソート(指定時間が複数あるとうまく動かない)
        this.on_time.sort(function (a, b) {
          return a.specified_time[0][0] - b.specified_time[0][0];
        });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      // 予定を重複を許すTask入れる処理
      this.other_tasks.push(task);
    }
  }

  // タスクをスケジュールから削除するモジュール
  /**
   * @param {Task} task
   */
  removeTask(task) {
    var id = task.id;
    if (task.isAllDay || task.isDuplicate) {
      tasks = this.other_tasks;
    } else {
      tasks = this.time_series_tasks;
    }
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].getId == id) {
        this.tasks.splice(i, 1);
      }
    }
  }

  // 時系列タスクの表示をするモジュール
  viewTasks() {
    for (const events of this.auto_schedule) {
      console.log(
        events.name +
          ":" +
          new Date(events.specified_time[0][0]).toString() +
          " -> " +
          new Date(events.specified_time[0][1]).toString()
      );
    }
    for (const events of this.on_time) {
      console.log(
        events.name +
          ":" +
          new Date(events.specified_time[0][0]).toString() +
          " -> " +
          new Date(events.specified_time[0][1]).toString()
      );
    }
  }

  // all_tasksに全てのtaskを追加するモジュール (ここで, 分割した場合は統合する？)
  returnAllTasks() {
    var i = 0;
    var j = 0;
    while (i < this.on_time.length || j < this.auto_schedule.length) {
      if (i >= this.on_time.length) {
        this.all_tasks.push(this.auto_schedule[j]);
        j++;
      } else if (j >= this.auto_schedule.length) {
        this.all_tasks.push(this.on_time[i]);
        i++;
      } else {
        if (
          this.on_time[i].specified_time[0][0] >
          this.auto_schedule[j].specified_time[0][0]
        ) {
          this.all_tasks.push(this.auto_schedule[j]);
          j++;
        } else {
          this.all_tasks.push(this.on_time[i]);
          i++;
        }
      }
    }
    return this.all_tasks;
  }
}

class Settings {
  constructor() {}
}

var schedule = 0;
var plan = 1;

var myLifestyle = new Schedule();
var mySchedule = new Schedule();
var mySettings = new Settings();

var user1 = new User("山田太郎", myLifestyle, mySchedule, mySettings);
// constructor(id, name, category, overview, favorite, plan_or_task, finished, duplicate, deadline, required_time, days, auto_scheduled, specified_time)
// var task1 = new Task(
//   123,
//   "デザイン開発",
//   "課題",
//   "Webページのデザインを開発せねば〜",
//   false,
//   false,
//   false,
//   false,
//   new Date(2022, 11, 14, 18, 20),
//   3,
//   1,
//   true,
//   [[0, 0]]
// );
var task2 = new Task(
  101,
  "情報線形代数レポート課題",
  "課題",
  "早く早く終わりたい！！",
  false,
  false,
  false,
  false,
  new Date(2022, 11, 14, 19, 0),
  1,
  1,
  true,
  [[0, 0]]
);
var task3 = new Task(
  100,
  "デザイン課題",
  "課題",
  "デザインの授業の課題！！！！！！！",
  false,
  false,
  false,
  false,
  new Date(2023, 11, 14, 18, 0),
  null,
  1,
  false,
  [
    [
      new Date(2022, 11, 14, 5, 25).getTime(),
      new Date(2022, 11, 14, 6, 0).getTime(),
    ],
  ]
);
var task4 = new Task(
  142,
  "情報英語発展",
  "課題",
  "英語で書かれた情報の専門誌を和訳する",
  false,
  false,
  false,
  false,
  new Date(2022, 11, 14, 18, 30),
  3,
  1,
  true,
  [[0, 0]]
);
var task5 = new Task(
  182,
  "ドイツ語基礎",
  "課題",
  "ドイツ語で会話をしてみよう",
  false,
  false,
  false,
  false,
  new Date(2022, 11, 14, 18, 30),
  3,
  1,
  true,
  [[0, 0]]
);

console.log(task2);

user1.schedule.addTask(task1);
user1.schedule.addTask(task2);
user1.schedule.addTask(task3);
user1.schedule.addTask(task4);
user1.schedule.addTask(task5);

user1.schedule.viewTasks();

console.log(user1.schedule.returnAllTasks());
