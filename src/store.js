import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { firebaseConfig } from "./config/firebaseInfo";
//reducer

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};
//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
);
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
