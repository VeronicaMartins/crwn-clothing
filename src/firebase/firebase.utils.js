import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhtvNnwHHS_exNePClCWD-x6b0oNrh14I",

  authDomain: "crwn-db-d75bf.firebaseapp.com",

  projectId: "crwn-db-d75bf",

  storageBucket: "crwn-db-d75bf.appspot.com",

  messagingSenderId: "958127605340",

  appId: "1:958127605340:web:06868d207580606b730899",

  measurementId: "G-9GL3GVY23X",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
