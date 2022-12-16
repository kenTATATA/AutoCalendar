import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  getDocFromCache,
  setDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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

//ここのtestuidのところにuserのuidを入れる
const userRef = doc(db, "userData", "testuid1234341234");
const docsnap = await getDoc(userRef);

const test_add_btn = document.getElementById("test_add");

document.getElementById("time").innerHTML = docsnap.data().予定;
document.getElementById("schedule").innerHTML = docsnap.data().時間;

test_add_btn.addEventListener("click", function () {
  console.log("hi");
  console.log(docsnap.data());
  setDoc(doc(db, "userData", "testuid13412451"), {
    name: "kang",
  });
});
