
import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
  const { name, quantity, price} = cartItem;
  return(
    <div>
      <h2>{name}</h2>
      <span>{`${quantity} x $${price}`}</span>
    </div>
  )
}

export default CartItem;
