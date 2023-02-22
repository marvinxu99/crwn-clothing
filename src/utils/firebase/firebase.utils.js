// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider, 
} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCej7HREgZ5bufQ926R8JYJ9f2q_f_5HrI",
  authDomain: "crown-db2-2fbd3.firebaseapp.com",
  projectId: "crown-db2-2fbd3",
  storageBucket: "crown-db2-2fbd3.appspot.com",
  messagingSenderId: "211769660775",
  appId: "1:211769660775:web:e8e4949f75068b72694bc2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
