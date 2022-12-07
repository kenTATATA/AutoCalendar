import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//data send
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyAtUFSGnjJcRdC4Y8dL8pDJFO1ZeHOeRyc",
  authDomain: "auto-a42ab.firebaseapp.com",
  projectId: "auto-a42ab",
  storageBucket: "auto-a42ab.appspot.com",
  messagingSenderId: "819879919631",
  appId: "1:819879919631:web:511870f4f26e97c767637a",
  measurementId: "G-YZLN75JLBX",
};

// const app = initializeApp(firebaseConfig);
const db = getFirestore();
const docref = doc(collection(db, "udstyr"));
const colref = collection(docref, "subcollection");
await addDoc(colref, nyUdstyr);
