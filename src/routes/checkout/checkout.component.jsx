import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';


const CheckOut = () => {
  const {cartItems, addItemToCart, removeItemFromCart, removeProductFromCart, cartTotal} = useContext(CartContext);

  return(
    <div className='checkout-container'>
      <h1>checkout page</h1>
      {
        cartItems.map((cartItem) => {
          const {id, imageUrl, name, price, quantity } = cartItem; 
          return(
            <div key={id}>
              <img src={imageUrl} alt={`${name}`} />
              <div>{name}</div>
              <span onClick={() => removeItemFromCart(cartItem) }>decrement</span>
              <div>{quantity}</div>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
              <div>${price}</div>
              <div>${quantity * price}</div>
              <span onClick={() => removeProductFromCart(cartItem)}>Remove</span>
            </div>
          )
        })
      }
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  )
}

export default CheckOut;