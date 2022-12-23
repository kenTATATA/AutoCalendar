//(KIM)ユーザー情報を取得
//////////////////////////////////////////////////////////////////////
//(仮)ローカルにユーザー情報を作成
let myLifestyle = new Schedule([], [], []);
let mySchedule = new Schedule([], [], []);
let mySettings = new Settings();
let user = new User("山田太郎", myLifestyle, mySchedule, mySettings);
//////////////////////////////////////////////////////////////////////



//main関数
//ページ更新時に実行
//(KIM)データベースからすべてのタスクを取得し、配列にする。
//////////////////////////////////////////////////////////////////////
//(仮)ローカルに最初から入っているタスクを作成し、配列にする。
const task1 = new Task(123, "デザイン開発", "課題", "Webページのデザインを開発せねば〜", false, false, false, false, new Date(2023, 11, 30, 18, 20), 4, 3, true, null);
const task2 = new Task(101, "情報線形代数レポート課題", "課題", "早く早く終わりたい！！", false, false, false, false, new Date(2023, 11, 24, 19, 0), 1, 1, false, [[new Date(2022, 11, 17, 0, 0), new Date(2022, 11, 17, 2, 0)]]);
const task3 = new Task(100, "デザイン課題", "課題", "デザインの授業の課題！！！！！！！", false, false, false, false, new Date(2023, 11, 25, 18, 0), null, 1, false, [[new Date(2022, 11, 24, 8, 20), new Date(2022, 11, 24, 9, 20)]]);
const task4 = new Task(142, "情報英語発展", "課題", "英語で書かれた情報の専門誌を和訳する", false, false, false, false, new Date(2023, 11, 30, 18, 30), 3, 1, true, null);
//var all_tasks = [task1, task2, task3, task4, task5];
user.schedule.addTask(task1);
user.schedule.addTask(task2);
user.schedule.addTask(task3);
user.schedule.addTask(task4);
//////////////////////////////////////////////////////////////////////
//未完了タスクを表示
task_list(user.schedule.returnAllTasks());

//未完了タスクの一覧表示
//Taskの配列から表示
function task_list(tasks) {
    document.getElementById('task_list_container').innerHTML = "";
    var i = 0;
    for (const task of tasks) {
        i++;
        var task_container = document.createElement("div");
        task_container.setAttribute('name', 'task_' + String(i));
        task_container.innerHTML = `<a href="#">${task.name}</a>`;
        for (const time of task.specified_time) {
            task_container.innerHTML += `
        <p>${(new Date(time[0]))} -> ${(new Date(time[1]))}</p>
            `;
        }

        document.getElementById('task_list_container').appendChild(task_container);
    }
}