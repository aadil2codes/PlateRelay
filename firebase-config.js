import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzHOWkTzyBET5cZCQSTVT9JLPOZFnwsHo",
    authDomain: "plateshare-bf98a.firebaseapp.com",
    projectId: "plateshare-bf98a",
    storageBucket: "plateshare-bf98a.firebasestorage.app",
    messagingSenderId: "389498402447",
    appId: "1:389498402447:web:11adbe29e5a083970ba2fa",
    measurementId: "G-R7QW82T52F",
    databaseURL: "https://plateshare-bf98a-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
