import { useContext,useState, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCart from '../ItemCart/ItemCart.jsx'
import useAsyncMock from '../../hooks/useAsyncMock';
import products from '../../mocks/menu.json';
import { CircularProgress, Button, TextField} from '@mui/material';

const Cart = () => {
    const { items, removeItem, clearCart } = useContext(cartContext);
    const { data, loading } = useAsyncMock(products);

    const [total, setTotal] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        direccion: ''
    });

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

    const handleClearCart = () => {
        clearCart();
    };

    const handleCheckout = () => {
        setShowForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Dentro del submit');

    };

    if (items.length === 0) {
        return (
            <>
                <p style={{ fontSize: '24px', textAlign: 'center' }}>El carrito está vacío.</p>
            </>
        );
    }

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
            <Button variant="contained" onClick={handleClearCart}>Vaciar Carrito</Button>
            <Button variant="contained" onClick={handleCheckout}>
                Checkout
            </Button>
            {showForm && (
                <div style={{ marginTop: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="telefono"
                            name="telefono"
                            label="Teléfono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="direccion"
                            name="direccion"
                            label="Dirección"
                            value={formData.direccion}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained">
                            Enviar
                        </Button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Cart;
