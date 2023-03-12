import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  
  const navigate = useNavigate();   // useNavigate hook

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
    </div>
  )
}

export default CartDropdown;