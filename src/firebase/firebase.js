import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config/config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.app = app.auth();
    this.db = app.firestore();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithUserAndPassword(
      email,
      password
    );
    return newUser.user.updateProfile({ displayName: name });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.SignOut();
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
