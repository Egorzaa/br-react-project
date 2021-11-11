// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlk8h7ESPjj2He6ilDlO0Afs-BOfQtMdI",
  authDomain: "fir-project-aa7cf.firebaseapp.com",
  databaseURL: "https://fir-project-aa7cf-default-rtdb.firebaseio.com",
  projectId: "fir-project-aa7cf",
  storageBucket: "fir-project-aa7cf.appspot.com",
  messagingSenderId: "1006420469993",
  appId: "1:1006420469993:web:a90d2ca3baa7726c982878",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
