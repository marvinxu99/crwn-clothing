import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';


const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  
  const navigate = useNavigate();   // useNavigate hook

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
          ))) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;