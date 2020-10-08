import app from "firebaase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.app = app.auth();
    this.db = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;
