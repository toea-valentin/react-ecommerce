import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../configs/firebase";

firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signOut = () => {
  return firebase.auth().signOut();
};

export const signInWithGoogle = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

export const signInWithFacebook = () => {
  return firebase.auth().signInWithPopup(facebookProvider);
};
