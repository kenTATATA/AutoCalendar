import { Task } from 'class_task.js';

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
    var new_task_array = {};
    
    var input_array = formElements.getElementsByTagName("input");
    var select_array = formElements.getElementsByTagName("select");
    var textarea_array = formElements.getElementsByTagName("textarea");

    for (let i = 0; i < input_array.length; i++) {
        item = input_array.item(i);
        if (item.type == "checkbox") {
            if (item.checked === true) {
                new_task_array[item.name] = true;
            } else {
                new_task_array[item.name] = false;
            }
        } else {
            new_task_array[item.name] = item.value;
        }

    }

    for (let i = 0; i < select_array.length; i++) {
        item = select_array.item(i);
        new_task_array[item.name] = item.value;
    }

    for (let i = 0; i < textarea_array.length; i++) {
        item = textarea_array.item(i);
        new_task_array[item.name] = item.value;
    }

    

    return new_task;
}

