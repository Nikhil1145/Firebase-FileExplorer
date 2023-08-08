import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1IFQvZHJjiJ3ILDisbLjZ0HtzzzUO7wE",
  authDomain: "storage-svelte2.firebaseapp.com",
  projectId: "storage-svelte2",
  storageBucket: "storage-svelte2.appspot.com",
  messagingSenderId: "653842700581",
  appId: "1:653842700581:web:aaa226324c1842c84262cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
