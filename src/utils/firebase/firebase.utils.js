// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    signOut,
    signInWithRedirect, 
    signInWithPopup,
    signInWithEmailAndPassword,

    GoogleAuthProvider, 
    FacebookAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc, 
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

const githubProvider = new GithubAuthProvider();

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const signInWithGithubPopup = () => signInWithPopup(auth, githubProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach( (object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  });

  await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docShanpshot) => {
    const { title, items } = docShanpshot.data();
    acc[title.toLowerCase()] = items;  
    return acc;
  }, {}) 

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  } else {
    return false;
  }
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);      
      return response;
    } catch(error) {
      console.log(error);
    }
  } else {
    return false;
  }
  
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

