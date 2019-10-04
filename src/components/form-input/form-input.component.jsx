import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, name, type, value, required }) => (
  <div className='group1'>
    <input className='form-input' 
      onChange={handleChange} 
      name={name} 
      type={type}
      value={value}
      required={required}
    />
    {label ? 
      (
        <label 
          className={`${
              value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )
      : null
    }
  </div>
)

export default FormInput;
