import { CircularProgress, Grid, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';
import useFirestore from '../../hooks/useFirestore.jsx';

function ItemListContainer() {
    const { data, loading } = useFirestore('menu', 'categoria', useParams().id);

    if (loading) return <CircularProgress />;

    return (
        <div className='container'>
            <Typography variant={'h2'}>Menu</Typography>
            <Grid container spacing={3}>
                {data.map((product) => {
                    const productId = product.id;
                    const productData = product;
                    if (productId) {
                        const formattedProduct = {
                            ...productData,
                            id: productId,
                            precio: parseFloat(productData.precio)
                        };
                        return <Product key={productId} product={formattedProduct} />;
                    } else {
                        console.warn('Product ID is undefined: ', product);
                        return null;
                    }
                })}
            </Grid>
        </div>
    );
}

export default ItemListContainer;

