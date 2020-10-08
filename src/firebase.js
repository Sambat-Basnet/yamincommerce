import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtcrIUuvn9Ev_wHZu-2hLLKEOq_QwXUag",
  authDomain: "yaminc-cf476.firebaseapp.com",
  databaseURL: "https://yaminc-cf476.firebaseio.com",
  projectId: "yaminc-cf476",
  storageBucket: "yaminc-cf476.appspot.com",
  messagingSenderId: "226206515083",
  appId: "1:226206515083:web:3d0b1e651ce66c052f798e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { firebaseApp as firebase };
export default db;
