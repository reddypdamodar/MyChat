import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDtqR7p0G3ABMY8dboZInp4DlvFwxW4fzk",
    authDomain: "mychat-79f71.firebaseapp.com",
    projectId: "mychat-79f71",
    storageBucket: "mychat-79f71.appspot.com",
    messagingSenderId: "409947517434",
    appId: "1:409947517434:web:d7d9867615d34d530a3443",
  })
  .auth();
