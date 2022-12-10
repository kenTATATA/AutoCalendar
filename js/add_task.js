var btn = document.getElementById('submit__btn');

//追加ボタンが押されたときの処理
btn.addEventListener('click', function () {
    //新しいタスクのデータをフォームから取得
    var new_task = get_new_task();


    //データベースからタスクを取得


    //classを揃える
    //自動スケジューリング


    //データベースにタスクを格納


    //トップページに戻る
    //トップページでデータベースからタスクを取得
    //トップページでタスクを表示


    console.log(new_task);
})

// 新しいタスクのデータをフォームから取得し、Taskクラスの形で返す関数
function get_new_task() {
    const formElements = document.forms.add_task__form;
    var a = {};

    var input_array = formElements.getElementsByTagName("input");
    var select_array = formElements.getElementsByTagName("select");
    var textarea_array = formElements.getElementsByTagName("textarea");

    for (let i = 0; i < input_array.length; i++) {
        item = input_array.item(i);
        if (item.type == "checkbox") {
            if (item.checked === true) {
                a[item.name] = true;
            } else {
                a[item.name] = false;
            }
        } else {
            a[item.name] = item.value;
        }

    }

    for (let i = 0; i < select_array.length; i++) {
        item = select_array.item(i);
        a[item.name] = item.value;
    }

    for (let i = 0; i < textarea_array.length; i++) {
        item = textarea_array.item(i);
        a[item.name] = item.value;
    }

    //タスクのid未定！！！！！
    var deadline_date = new Date(a["deadline_date"] + " " + a["deadline_hour"] + ":" + a["deadline_minute"]);
    var time = new Number(a["len_hour"]) + new Number(a["len_minute"]) / 60;
    var new_task = new Task(null, a["title"], deadline_date, time, a["auto_scheduling"], a["task_duplication"], a["all_day"], new Number(a["number_of_imp_days"]), a["overview"], a["category"], a["favorite"]);


    console.log(a);
    return new_task;
}

