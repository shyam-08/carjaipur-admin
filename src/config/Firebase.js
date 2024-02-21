import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqakm4VBw75_oSOdFxgnvoGikbBQkJz0U",
    authDomain: "carjaipur-admin.firebaseapp.com",
    projectId: "carjaipur-admin",
    storageBucket: "carjaipur-admin.appspot.com",
    messagingSenderId: "179341575447",
    appId: "1:179341575447:web:60471bc13420916f6da352",
    measurementId: "G-29VD30LY5X"
  };
  const app = initializeApp(firebaseConfig);
// Now, create the instances you need and export them
const auth = getAuth(app);
const database = getFirestore(app);

export default{ app,auth,database };