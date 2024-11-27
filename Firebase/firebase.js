import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIYaDKwLZnoQH4lsOrpivrXS-DWHZI_dc",
  authDomain: "web-develop-d6256.firebaseapp.com",
  databaseURL: "https://web-develop-d6256-default-rtdb.firebaseio.com",
  projectId: "web-develop-d6256",
  storageBucket: "web-develop-d6256.appspot.com",
  messagingSenderId: "371279801615",
  appId: "1:371279801615:web:2613313cae326bfd70e27a",
  measurementId: "G-0W6MKSXX32"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export { auth,createUserWithEmailAndPassword };
