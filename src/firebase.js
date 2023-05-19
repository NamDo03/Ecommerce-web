// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0djvt134rnkLiXYf_I2oU8oPVsMvrSlQ",
    authDomain: "dnam-b3dc2.firebaseapp.com",
    projectId: "dnam-b3dc2",
    storageBucket: "dnam-b3dc2.appspot.com",
    messagingSenderId: "358836194904",
    appId: "1:358836194904:web:8574c40862d32e8913842d",
    measurementId: "G-T06PL9SG2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

export const provider = new GoogleAuthProvider(); 