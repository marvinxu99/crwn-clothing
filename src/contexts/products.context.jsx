import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

//import PRODUCTS from '../shop-data.json';

// Use the following to import 'shop-data.js' into Firebase
// move the useEfect into the ProdcutProvider function for one-time execution
  //import SHOP_DATA from '../shop-data.js';
  // useEffect(() => {   
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);


  const value = { products };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
}
