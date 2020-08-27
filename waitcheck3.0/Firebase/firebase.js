import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5B2O16NfgN5l-85XUn9GrxgBdqkNAzrE",
    authDomain: "waitcheck-dab76.firebaseapp.com",
    databaseURL: "https://waitcheck-dab76.firebaseio.com",
    projectId: "waitcheck-dab76",
    storageBucket: "waitcheck-dab76.appspot.com",
    messagingSenderId: "939477860908"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
  export default Firebase;