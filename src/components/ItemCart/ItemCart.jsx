import PropTypes from 'prop-types';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const ItemCart = ({ product, quantity, onRemove }) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const { addItem } = useContext(cartContext);

    const handleQuantityChange = (newQuantity) => {
        setCurrentQuantity(newQuantity);
        addItem(product.id, parseInt(newQuantity, 10));
    };
    return (
        <tr>
            <td><Link to={`/item/${product.id}`}>{product.nombre}</Link></td>
            <td>{product.precio}</td>
            <td>                <input
                    type="number"
                    value={currentQuantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                /></td>
            <td>{product.precio * currentQuantity}</td>
            <td><DeleteForeverRoundedIcon onClick={onRemove} style={{cursor: 'pointer'}} /></td>
        </tr>
    );
};

ItemCart.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        nombre: PropTypes.string,
        precio: PropTypes.number,
        
    }),
    quantity: PropTypes.number,
    onRemove: PropTypes.func,
};

export default ItemCart;
