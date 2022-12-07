import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const auth = getAuth();

const submitButton = document.getElementById("logout");
submitButton.addEventListener("click", function () {
  console.log("hello");
  signOut(auth)
    .then(() => {
      console.log("hi");
    })
    .catch((error) => {
      console.log(error);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // const uid = user.uid;
    // ...
  } else {
    document.location.href = "main.html";

    // User is signed out
    // ...
  }
});
