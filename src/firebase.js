// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj3dxD6z10f-rWs1INXLyWYDGC-DwqTUM",
    authDomain: "dnam-1cd1a.firebaseapp.com",
    projectId: "dnam-1cd1a",
    storageBucket: "dnam-1cd1a.appspot.com",
    messagingSenderId: "572577068844",
    appId: "1:572577068844:web:a71056c4a28d3954c45e89",
    measurementId: "G-816W9E5YR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

export const provider = new GoogleAuthProvider(); 