import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtnBtjLbRJFPviTr7Q--rZWfjNhkg-uno",
  authDomain: "crown-db-24299.firebaseapp.com",
  projectId: "crown-db-24299",
  storageBucket: "crown-db-24299.appspot.com",
  messagingSenderId: "425680056946",
  appId: "1:425680056946:web:e0252739b021934dbf08eb",
  measurementId: "G-5NVZSQRYP1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
