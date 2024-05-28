import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNL9OZHj-FsxoCOMnj7dzRaeO60PGRvtM",
    authDomain: "vercel-2024.firebaseapp.com",
    projectId: "vercel-2024",
    storageBucket: "vercel-2024.appspot.com",
    messagingSenderId: "667739438075",
    appId: "1:667739438075:web:86a83089c7d8bb0703695e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);