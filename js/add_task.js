var btn = document.getElementById('submit__btn');

//追加ボタンが押されたときの処理
btn.addEventListener('click', function () {
    //新しいタスクのデータをフォームから取得し、Taskクラスの変換してScheduleクラスに格納
    var new_task = get_new_task();


    //データベースから他のタスクを取得し、Taskクラスの変換してScheduleクラスに格納


    //自動スケジューリング


    //Scheduleクラスのall_tasksのタスクをデータベースに格納


    //トップページに戻る
    //トップページでデータベースからタスクを取得
    //トップページでタスクを表示


    console.log(new_task);
})

//フォームの動的化：タスクか予定か
function Plan_or_Task() {
    if (document.getElementById("plan_or_task")) {
        var Plan_or_Task = document.getElementById("plan_or_task").value;
        if (Plan_or_Task == "Plan") {
            document.getElementById("deadline_form").style.display = "none";
            document.getElementById("len_form").style.display = "none";
            document.getElementById("auto_scheduling_form").style.display = "none";
            document.getElementById("auto_scheduling").checked = false;
            AutoScheduling();
        } else if (Plan_or_Task == "Task") {
            document.getElementById("deadline_form").style.display = "";
            document.getElementById("len_form").style.display = "";
            document.getElementById("auto_scheduling_form").style.display = "";
            document.getElementById("auto_scheduling").checked = true;
            AutoScheduling();
        }
    }
}

//フォームの動的化：AutoSchedulingがオンのときにフォームを消す
function AutoScheduling() {
    if (document.getElementById("auto_scheduling").checked === true) {
        document.getElementById("number_of_imp_days").setAttribute("onchange", "");
        document.getElementById('imp_date__form--container').innerHTML = "";
    } else {
        document.getElementById("number_of_imp_days").setAttribute("onchange", "CreatingForm();");
        CreatingForm();
    }
}

//フォームの動的化：number_of_imp_days分だけフォームを作成
function CreatingForm() {
    var n = Number(document.getElementById("number_of_imp_days").value);
    document.getElementById('imp_date__form--container').innerHTML = "";
    for (var i = 1; i < n + 1; i++) {
        var imp_date__form = document.createElement("div");
        imp_date__form.setAttribute('name', 'imp_date__form_' + String(i));
        imp_date__form.innerHTML = `
        <h5>実施時間${i}</h5>
        <input name="imp_date_${i}" type="date"></input>
        <br />
        開始：
        <select name="imp_start_hour_${i}">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
        </select>時
        <select name="imp_start_minute_${i}">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
        </select>分
        <br />
        終了：
        <select name="imp_end_hour_${i}">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
        </select>時
        <select name="imp_end_minute_${i}">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
        </select>分<br />
            `;
        document.getElementById('imp_date__form--container').appendChild(imp_date__form);
    }
}


// 新しいタスクのデータをフォームから取得し、Taskクラスの形で返す関数
function get_new_task() {
    const formElements = document.forms.add_task__form;
    var a = {};

    var input_array = formElements.getElementsByTagName("input");
    var select_array = formElements.getElementsByTagName("select");
    var textarea_array = formElements.getElementsByTagName("textarea");

    for (var i = 0; i < input_array.length; i++) {
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

    for (var i = 0; i < select_array.length; i++) {
        item = select_array.item(i);
        a[item.name] = item.value;
    }

    for (var i = 0; i < textarea_array.length; i++) {
        item = textarea_array.item(i);
        a[item.name] = item.value;
    }

    if (a["plan_or_task"] == "Plan") {
        var deadline_date = null;
        var required_time = null;
    } else {
        var deadline_date = new Date(a["deadline_date"] + " " + a["deadline_hour"] + ":" + a["deadline_minute"]);
        var required_time = new Number(a["len_hour"]) + new Number(a["len_minute"]) / 60;
    }

    var specified_time = [];
    if (a["auto_scheduling"] == false) {
        for (var i = 1; i < Number(a["number_of_imp_days"]) + 1; i++) {
            var imp_start_date = new Date(a["imp_date_" + String(i)] + " " + a["imp_start_hour_" + String(i)] + ":" + a["imp_start_minute_" + String(i)]);
            var imp_end_date = new Date(a["imp_date_" + String(i)] + " " + a["imp_end_hour_" + String(i)] + ":" + a["imp_end_minute_" + String(i)]);
            specified_time.push([imp_start_date, imp_end_date]);
        }
    }
    var new_task = new Task(null, a["title"], a["category"], a["overview"], a["favorite"], a["plan_or_task"], false, a["task_duplication"], deadline_date, required_time, Number(a["number_of_imp_days"]), a["auto_scheduling"], specified_time);

    console.log(a);
    return new_task;
}