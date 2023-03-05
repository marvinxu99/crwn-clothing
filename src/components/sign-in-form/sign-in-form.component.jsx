import { useState, useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGithubPopup,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInWithFirebaseEmailAndPassword,
} from '../../utils/firebase/firebase.utils'; 


import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

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
    try {
      const { user } = await signInWithGithubPopup();
      await createUserDocumentFromAuth(user);  
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSummit = async (event) => {
    event.preventDefault();

    const { user } = await signInWithFirebaseEmailAndPassword(email, password);
    console.log(user.accessToken);

    resetFormFields();
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSummit }>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
        <FormInput label='Password ' type='password' required onChange={handleChange} name='password' value={password} />
        <Button type='submit'>Sign In</Button>
      </form>
      <div className='oauth-button-container'>
        <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google Popup</Button>
        <Button buttonType='google' onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</Button>
        <Button buttonType='google' onClick={logGithubUser}>Sign in with Github Popup</Button>
      </div>
    </div>
  )
}

export default SignInForm;