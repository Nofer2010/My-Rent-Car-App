import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnr_z6-k4YNaxp2sp7uAfe0V7MyIOzk1c",
    authDomain: "rent-cars-apk.firebaseapp.com",
    projectId: "rent-cars-apk",
    storageBucket: "rent-cars-apk.appspot.com",
    messagingSenderId: "56096686698",
    appId: "1:56096686698:web:58a36f8083b6db0e214013"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
