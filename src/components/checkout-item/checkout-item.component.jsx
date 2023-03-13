import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) => {
  const { imageUrl, name, price, quantity } = cartItem; 

  const { addItemToCart, removeItemFromCart, removeProductFromCart } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeProductHandler = () => removeProductFromCart(cartItem);
  
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img className='img' src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>&#10095;</span>
      </div>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={removeProductHandler}>&#10005;</div>
    </div>
  )

}

export default CheckoutItem;