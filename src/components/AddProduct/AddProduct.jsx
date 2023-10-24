import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import Counter from '../Counter/Counter.jsx';
import PropTypes from 'prop-types'
import {cartContext} from '../../context/cartContext.jsx'

const AddProduct = (props) => {
  const [counterValue, setCounterValue] = useState(0);
  const {addItem} = useContext(cartContext);

  const {id} = props;

  const handleCounterChange = (value) => {
    setCounterValue(value);
  };

  const addToCart = () => {
    addItem(id,counterValue);
  };

  return (
    <>
      <Counter onCounterChange={handleCounterChange} />
      <Button variant="contained" onClick={addToCart}>
        Agregar
      </Button>
    </>
  );
};

AddProduct.propTypes = {
    id: PropTypes.string.isRequired,
};

export default AddProduct;