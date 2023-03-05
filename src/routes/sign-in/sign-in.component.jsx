import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';


import { 
  auth,
  signInWithGithubPopup,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'; 


const SignIn = () => {

  useEffect(() => {
    async function getGoogleRedirectResult() {
      const response = await getRedirectResult(auth);
      if(response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    getGoogleRedirectResult();
  }, []);

  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  // https://firebase.google.com/docs/auth/web/github-auth
  async function logGithubUser() {
    const { user } = await signInWithGithubPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>

      <button onClick={logGithubUser}>Sign in with Github Popup</button>
    </div>
  )
}

export default SignIn;