import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const cartContext = createContext();
    
export const CartContextProvider = (props) =>{
  const initialItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

    const addItem = (id,quantity)=>{
      if (quantity === 0) {
        setItems(items.filter(item => item.id !== id));
      } else {
        const itemFound = items.find(item => item.id === id);
        if (!itemFound) {
          setItems([...items, { id: id, quantity: quantity }]);
        } else {
          itemFound.quantity = quantity;
          setItems(items);
        }
      }
    };

    const contextValue = {
        items,
        addItem,
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