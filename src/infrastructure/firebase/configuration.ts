// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByL8K9LQsQkqArkUE431dUoZs7zzN0aHc",
    authDomain: "penitentiary-firebase.firebaseapp.com",
    projectId: "penitentiary-firebase",
    storageBucket: "penitentiary-firebase.firebasestorage.app",
    messagingSenderId: "775501579855",
    appId: "1:775501579855:web:9fa1d2c070a1267a8a8c3a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };