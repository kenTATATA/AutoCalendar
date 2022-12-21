import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  getDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { Task } from "./task.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtUFSGnjJcRdC4Y8dL8pDJFO1ZeHOeRyc",
  authDomain: "auto-a42ab.firebaseapp.com",
  projectId: "auto-a42ab",
  storageBucket: "auto-a42ab.appspot.com",
  messagingSenderId: "819879919631",
  appId: "1:819879919631:web:511870f4f26e97c767637a",
  measurementId: "G-YZLN75JLBX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userRef = doc(db, "userData", "testuid_getData");
const docsnap = await getDoc(userRef);
const data = docsnap.data().testtask1;

function toTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}
const add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", () => {
  let title = document.getElementById("title").value;

  let deadline_date = toTimestamp(
    document.getElementById("deadline_date").value
  );
  let deadline_hour = document.getElementById("deadline_hour").value * 3600;
  let deadline_minute = document.getElementById("deadline_minute").value * 60;

  let deadline = deadline_date + deadline_hour + deadline_minute;

  let len_hour = document.getElementById("len_hour").value;
  let len_minute = document.getElementById("len_minute").value;

  let required_time = len_hour + len_minute / 60;

  let auto_scheduling = document.getElementById("auto_scheduling").checked;
  let task_duplication = document.getElementById("task_duplication").checked;
  let all_day = document.getElementById("all_day").checked;

  let number_of_imp_days = document.getElementById("number_of_imp_days").value;

  let imp_date = toTimestamp(document.getElementById("imp_date").value);
  let imp_start_hour = document.getElementById("imp_start_hour").value * 3600;
  let imp_start_minute = document.getElementById("imp_start_minute").value * 60;

  let imp_s = imp_date + imp_start_hour + imp_start_minute;

  let imp_end_hour = document.getElementById("imp_start_hour").value * 3600;
  let imp_end_minute = document.getElementById("imp_start_minute").value * 60;

  let imp_e = imp_date + imp_end_hour + imp_end_minute;

  let overview = document.getElementById("overview").value;
  let category = document.getElementById("category").value;
  let like = document.getElementById("like").checked;

  console.log(like);
  setDoc(doc(db, "userData", "testuid13412451"), {
    testtask: [
      deadline,
      required_time,
      title,
      data[3],
      data[4],
      data[5],
      data[6],
      data[7],
      data[8].seconds * 1000,
      data[9],
      data[10],
      data[11],
      data[12].seconds * 1000,
      data[13].seconds * 1000,
    ],
  });
});
