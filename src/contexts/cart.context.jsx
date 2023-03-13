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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const index = cartItems.findIndex(item => item.id === cartItemToRemove.id);

  if(index >= 0) {
    if (cartItems[index].quantity === 1) {
      return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    } else {
      return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
      );
    }
  }
  
  return cartItems;
}

const removeCartProduct = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeProductFromCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  
  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, item) =>accumulator + item.quantity, 0); 
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((accumulator, item) =>accumulator + item.quantity * item.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const removeItemFromCart = (cartItem) => {
    setCartItems(removeCartItem(cartItems, cartItem));
  }

  const removeProductFromCart = (product) => {
    setCartItems(removeCartProduct(cartItems, product));
  }

  // Must include the vars and/or functions to be exposed to other components here
  const value = { 
      isCartOpen, 
      setIsCartOpen, 
      cartItems, 
      cartCount, 
      cartTotal, 
      removeItemFromCart, 
      addItemToCart, 
      removeProductFromCart, 
  };
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}