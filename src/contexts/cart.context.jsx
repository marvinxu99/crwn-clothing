import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //Find if cartItems contains productToAdd
  const index = cartItems.findIndex(item => item.id === productToAdd.id);

  if(index >= 0) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity:1 }]
}

const removeCartItem = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  
  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, item) =>accumulator + item.quantity, 0); 
    setCartCount(newCartCount);

    const newCartTotal = cartItems.reduce((accumulator, item) =>accumulator + item.quantity * item.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartCount, removeItemFromCart };
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}