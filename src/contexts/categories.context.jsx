import { createContext, useState, useEffect } from "react";

//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//import PRODUCTS from '../shop-data.json';
// Use the following to import 'shop-data.js' into Firebase
// move the useEfect into the ProdcutProvider function for one-time execution
  //import SHOP_DATA from '../shop-data.js';
  // useEffect(() => {   
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap)
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
}
