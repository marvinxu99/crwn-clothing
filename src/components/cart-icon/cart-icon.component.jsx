import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const items_count = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return (
    <div 
      className='cart-icon-container' 
      onClick={()=>{
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{items_count}</span>
    </div>
  )

}

export default CartIcon;
