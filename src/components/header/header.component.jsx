import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectUserCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>

    <div className='options'>
        <Link className='option' to='/'>
          HOME
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>       
        { /* Logic for displaying SIGN OUT or SIGN IN */
          currentUser ?
          <div className='option' onClick={()=>auth.signOut()}>
            SIGN OUT
          </div>
          :  
          <Link className='option' to='/signin'>
              SIGN IN
          </Link>
        }
        <CartIcon />
      </div>
      { 
        hidden ? null : <CartDropdown />
      }
    </div>
);

/****
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
}) *****/
/*
const mapStateToProps = (state) => ({
  currentUser: selectUserCurrentUser(state),
  hidden: selectCartHidden(state)
}); */
const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser,
  hidden: selectCartHidden
}); 

export default connect(mapStateToProps)(Header);