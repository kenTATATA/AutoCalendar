
/**
 * 現段階でのtodo
 * それぞれの関数にコメントつける
 * 睡眠時間とかの日々のルーティーンの設定
 * 優先度に応じたTodoのスケジューリングの実装
 * 授業の取得
 * 祝日(学校の日程)の実装
 * イベントの固定とかの見直し
*/

/**
 * function GateDate()
 * FullCalendar用の時間情報を返す。
 * 引数：なし
 * 返り値：なし
*/

/**
 * function GetEvents(id)
 * idに対応した人のイベント(ToDoとか予定とか)を取ってくる
 * 引数：ユーザー固有のID
 * 返り値：連想配列の配列
 * [{title: イベント名, start:イベント開始時間, end: イベント終了時間, editable: 固定された用事かどうか, overlap: その予定の上に重ねれるか}]
*/

import FullCalendar from "../dist/index.global.js"

class DrawCalendar{
    constructor(all_tasks) {
        let tasks = [];
        for (const task of all_tasks) {
            for (let i = 0; i < task.specified_time.length; i++){
                const event = {
                    title: task.name,
                    start: task.specified_time[i][0],
                    end: task.specified_time[i][1],
                    editable: task.auto_scheduled,
                    overlap: task.duplicate
                }
                tasks.push(event);
            }
        }

        console.log(tasks);
        

        var calendarEl = document.getElementById('calendar');
        calendarEl.style.margin = "5% 20%";

        var calendar = new FullCalendar.Calendar(calendarEl, {
            
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek_Today,timeGridDay,listMonth'
            },
            views: { // 今日を開始日とした1週間の表示
                timeGridWeek_Today: {
                    type: 'timeGrid',
                    duration: { days: 7 },
                    buttonText: 'Week'
                }
            },
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            selectable: true,
            nowIndicator: true,
            events: tasks,
            eventTimeFormat: { hour: '2-digit', minute: '2-digit' },
            
            // イベントがクリックされたとき
            // eventClick: function (jsEvent) {
            //     if(window.confirm("このイベントを削除しますか？")){
            //         jsEvent.event.remove();
            //     }
            // },
        });

        calendar.render();
    }
}

//ページ更新時に実行
var calendar = new DrawCalendar(user.schedule.returnAllTasks());
