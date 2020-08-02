import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMQX7kCeesxiVGOCSTua4dGzdgIgpmUgA",
    authDomain: "galleryonfire-d1a63.firebaseapp.com",
    databaseURL: "https://galleryonfire-d1a63.firebaseio.com",
    projectId: "galleryonfire-d1a63",
    storageBucket: "galleryonfire-d1a63.appspot.com",
    messagingSenderId: "1001397922645",
    appId: "1:1001397922645:web:f289bd0892c75c8e92dddc"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};