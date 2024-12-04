// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBagMBXtw6XWikqVbLSxOfzywqrlSK1ywA",
  authDomain: "assignment-ten-72073.firebaseapp.com",
  projectId: "assignment-ten-72073",
  storageBucket: "assignment-ten-72073.firebasestorage.app",
  messagingSenderId: "562841309835",
  appId: "1:562841309835:web:5896098735e186eb423a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);