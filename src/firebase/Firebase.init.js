// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5X7EpEdIGbBzRzStzRgIDcNRfsGsRYr0",
  authDomain: "smart-deals-544f7.firebaseapp.com",
  projectId: "smart-deals-544f7",
  storageBucket: "smart-deals-544f7.firebasestorage.app",
  messagingSenderId: "986198159188",
  appId: "1:986198159188:web:d7c2eacdb181179f74a2c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);