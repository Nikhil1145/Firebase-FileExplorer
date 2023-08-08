import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjX1LFeVG5KqnDe9eqdlH-L0W_yWMa1BI",
  authDomain: "storage-svelte.firebaseapp.com",
  projectId: "storage-svelte",
  storageBucket: "storage-svelte.appspot.com",
  messagingSenderId: "742898973827",
  appId: "1:742898973827:web:8d209bffc652ba49e2afb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;