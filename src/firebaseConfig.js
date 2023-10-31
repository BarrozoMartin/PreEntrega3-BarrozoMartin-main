import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsZorRBtWldgTbda4oONhyWr4EqvcYVg8",
  authDomain: "buhonero-e8691.firebaseapp.com",
  projectId: "buhonero-e8691",
  storageBucket: "buhonero-e8691.appspot.com",
  messagingSenderId: "749800214167",
  appId: "1:749800214167:web:a9daeda696281c333523d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
// const auth = getAuth(app)


