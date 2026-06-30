// frontend/src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Chaves web do Firebase (públicas — a segurança é feita pelas regras do Firestore).
const firebaseConfig = {
    apiKey: "AIzaSyDD8Ktr4ozcNj2SdwSbiz8ynHE_I_7yHYs",
    authDomain: "portfolio-5d3ee.firebaseapp.com",
    projectId: "portfolio-5d3ee",
    storageBucket: "portfolio-5d3ee.firebasestorage.app",
    messagingSenderId: "1034769508450",
    appId: "1:1034769508450:web:1d1e07d23b4273a290093b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
