import { createContext, useState } from 'react';
import useLocalStorage from 'use-local-storage-state';

export const ProductContext = createContext({});

export function ProductContextProvider({children}) {
  const [selectedProducts, setSelectedProducts] = useLocalStorage('cart', {defaultValue:[]});

  return (
    <ProductContext.Provider value={{selectedProducts, setSelectedProducts}}>
      {children}
    </ProductContext.Provider>
  )
}