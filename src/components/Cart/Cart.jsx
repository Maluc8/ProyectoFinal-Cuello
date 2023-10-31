import { useContext,useState, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCart from '../ItemCart/ItemCart.jsx'
import useAsyncMock from '../../hooks/useAsyncMock';
import products from '../../mocks/menu.json';
import { CircularProgress } from '@mui/material';

const Cart = () => {
    const { items, removeItem } = useContext(cartContext);
    const { data, loading } = useAsyncMock(products);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!loading && data) {
            const newTotal = items.reduce((acc, item) => {
                const product = data.find(prod => prod.id === item.id);
                return acc + item.quantity * product.precio;
            }, 0);
            setTotal(newTotal);
        }
    }, [loading, data, items]);

    if (loading) return <><CircularProgress /></>;

    const handleRemoveItem = (productId) => {
        removeItem(productId);
    };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(product => {
                        const productData = data.find(el => el.id === product.id);
                        return <ItemCart key={product.id} product={productData} quantity={product.quantity} onRemove={() => handleRemoveItem(product.id)} />
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Cart;
