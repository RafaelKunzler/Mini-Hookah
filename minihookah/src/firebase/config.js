import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc35TIhc6wCNiZEXaIaTAVWK8IceOJzQI",
  authDomain: "minihookah-c90cc.firebaseapp.com",
  projectId: "minihookah-c90cc",
  storageBucket: "minihookah-c90cc.appspot.com",
  messagingSenderId: "765788331262",
  appId: "1:765788331262:web:ad8c07693fda12bc7399af"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };