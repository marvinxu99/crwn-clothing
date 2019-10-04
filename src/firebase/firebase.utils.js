import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCEoihG_P7XVzHe_vat6L1U4DoBll5MgJk",
  authDomain: "crown-db-a5810.firebaseapp.com",
  databaseURL: "https://crown-db-a5810.firebaseio.com",
  projectId: "crown-db-a5810",
  storageBucket: "",
  messagingSenderId: "200724092996",
  appId: "1:200724092996:web:26a1f6e68d320e57c9c411",
  measurementId: "G-24FF87JHG1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/*provider.setCustomParameters({ prompt: 'select_account' }); */
provider.addScope('profile');
provider.addScope('email');
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




