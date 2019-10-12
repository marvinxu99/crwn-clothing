import React from 'react';

import './contact.styles.scss';

//import { ReactComponent as Winter } from '../assets/images/winter-resizedhalf.svg';
import { ReactComponent as Winter } from '../../assets/images/winter-resizedhalf.svg';
import winter2 from '../../assets/images/winter-winter.jpeg';


const contactpage = () =>(
  <div>
    <h2>Contact page is under construction</h2>
    <Winter className='winter-small' />
    <img className='winter-small' src={ winter2 } alt='winter the dog' />
  </div>
);

export  default contactpage;
