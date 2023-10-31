import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const cartContext = createContext();
    
export const CartContextProvider = (props) =>{
  const initialItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addItem = (id, quantity) => {
    const existingItemIndex = items.findIndex(item => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity = quantity;
      setItems(updatedItems);
    } else {
      setItems([...items, { id: id, quantity: quantity }]);
    }
  };

    const removeItem = (productId) => {
      setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

    const contextValue = {
        items,
        addItem,
        removeItem
      };
    
      return (
        <cartContext.Provider value={contextValue}>
          {props.children}
        </cartContext.Provider>
      );
    };

    CartContextProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };