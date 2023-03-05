import { useState } from 'react';

import { createAuthUserWithEmailPassword } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  var auth_result;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSummit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      auth_result = createAuthUserWithEmailPassword(email, password);

      console.log(auth_result)

    }
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={ handleSummit }>
        <label>
          Display Name <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>
        </label>

        <label>
          Email <input type='email' required onChange={handleChange} name='email' value={email}/>
        </label>

        <label>
        Password <input type='password' required onChange={handleChange} name='password' value={password} />
        </label>

        <label>
          Confirm Password <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        </label>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;