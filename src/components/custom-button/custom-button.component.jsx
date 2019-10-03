import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, type }) => (
  <button className='custom-button' type={type}>
    {children}
  </button>
);

export default CustomButton;