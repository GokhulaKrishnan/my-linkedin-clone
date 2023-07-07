import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASccyabfNGobBu4qea26G69a9aqiuHKP8",
  authDomain: "linkedin-clone-6bd15.firebaseapp.com",
  projectId: "linkedin-clone-6bd15",
  storageBucket: "linkedin-clone-6bd15.appspot.com",
  messagingSenderId: "168363252063",
  appId: "1:168363252063:web:5a1c8ceda022950056beea",
  measurementId: "G-XCJ7NXXKZL",
};

// This thing will setup everything
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Getting firestore and storing it
const db = firebaseApp.firestore();
// To get authentication
const auth = firebase.auth();

// As we need of it separately we are exporting it like this
export { db, auth };
