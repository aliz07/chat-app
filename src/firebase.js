import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAgOAgO1td-dImH2kzmD0uzWsUUuFTLv8Y",
    authDomain: "metagram-1f991.firebaseapp.com",
    projectId: "metagram-1f991",
    storageBucket: "metagram-1f991.appspot.com",
    messagingSenderId: "316919502701",
    appId: "1:316919502701:web:e187a7aa6ded5e1c732c64"
  }).auth();