import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Emoji } from '../../assets/pg404icon.svg';

import './page-not-found.styles.scss';

const PageNotFound = () => (
  <div className="t-c p404-container">
    <h1 className="p404-header">404 Error - Page not found</h1>
      <Emoji className="p404-emoji" />
      <p className="p404-text">
        Sorry, we couldn't find what you are looking for
      </p>
      <Link className='link' to="/">
        Go back to home page
      </Link>
  </div>
);

export default PageNotFound;
