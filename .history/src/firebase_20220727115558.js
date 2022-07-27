import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.re,
  authDomain: "auth-development-db9af.firebaseapp.com",
  projectId: "auth-development-db9af",
  storageBucket: "auth-development-db9af.appspot.com",
  messagingSenderId: "892374021149",
  appId: "1:892374021149:web:1ffc344764c454dafe02f4"
})