import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class FirebaseApp {
  _config: any;

  constructor() {
    this._config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_DB_URL,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };
    this.init();
  }

  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this._config);
    }
  }

  async register(email: string, password: string) {
    const newUser = await firebase

      .auth()
      .createUserWithEmailAndPassword(email, password);
    return newUser;
  }

  async login(email: string, password: string) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return user;
  }

  async logout() {
    await firebase.auth().signOut();
  }

  async resetPassword(email: string) {
    await firebase.auth().sendPasswordResetEmail(email);
  }

  isInitialized() {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return firebase.auth().currentUser?.email;
  }

  getCurrentUserId() {
    return firebase.auth().currentUser?.uid;
  }
}

export default new FirebaseApp();
