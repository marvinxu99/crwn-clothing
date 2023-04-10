import { useState, useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGithubPopup,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'; 

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

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

  const signInWithGoogle = async () => {
    try {
      // ***moved to UserContext
      // const { user } = await signInWithGooglePopup();
      // await createUserDocumentFromAuth(user);
      await signInWithGooglePopup();

    } catch (error) {
      console.log(error);
    }
  }

  // https://firebase.google.com/docs/auth/web/github-auth
  const logGithubUser = async () => {
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

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );

      resetFormFields();  
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password for email");          
          break;

        case 'auth/user-not-found':
          alert("Incorrect email address");          
          break;
          
        default:
          alert("Incorrect password or email");          
          break;
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSummit }>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
        <FormInput label='Password ' type='password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
      </form>
      { /*
      <div className='oauth-button-container'>
        <Button type='button' buttonType='google' onClick={signInWithGoogleRedirect}>Sign In with Google Redirect </Button>
      </div>
      <div className='oauth-button-container'>
        <Button type='button' buttonType='google' onClick={logGithubUser}>Sign In With Github</Button>
      </div>
      */}
    </div>

  )
}

export default SignInForm;