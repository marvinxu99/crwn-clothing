import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, type, onClick }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    type={type} 
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;