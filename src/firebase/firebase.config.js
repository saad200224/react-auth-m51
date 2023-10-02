import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbdqCwUNypBguq5QQazWrJ1VLuPImV_gM",
  authDomain: "auth-moha-milon-909f2.firebaseapp.com",
  projectId: "auth-moha-milon-909f2",
  storageBucket: "auth-moha-milon-909f2.appspot.com",
  messagingSenderId: "62304606329",
  appId: "1:62304606329:web:0d15071efd705603391ca8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;