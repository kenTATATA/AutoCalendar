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

// const querySnapshot = await getDocs(collection(db, "userData"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });
//ここのtestuidのところにuserのuidを入れる

const userRef = doc(db, "userData", "testuid_getData");
const docsnap = await getDoc(userRef);
const data = docsnap.data().testtask1;

const test_add_btn = document.getElementById("test_add");

// document.getElementById("time").innerHTML = docsnap.data().予定;
// document.getElementById("schedule").innerHTML = docsnap.data().時間;

export const task1 = new Task(
  data[0],
  data[1],
  data[2],
  data[3],
  data[4],
  data[5],
  data[6],
  data[7],
  data[8].seconds * 1000,
  data[9],
  data[10],
  data[11],
  [[data[12].seconds * 1000, data[13].seconds * 1000]]
);
console.log(task1);

test_add_btn.addEventListener("click", () => {
  setDoc(doc(db, "userData", "testuid13412451"), {
    testtask: [
      data[0],
      data[1],
      data[2],
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
