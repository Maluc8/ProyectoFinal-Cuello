import { CircularProgress, Grid, Typography } from '@mui/material';
import useAsyncMock from '../../hooks/useAsyncMock';
import products from '../../mocks/menu.json';
import Product from '../Product/Product.jsx';

function ProductList() {
    const {data, loading}= useAsyncMock(products);

    if(loading) return <CircularProgress />

  return (
    <div className='container'>
        <Typography variant={'h2'}>Menu</Typography>
        <Grid container spacing={3}>
            {
                data.map(product =>{
                    return <ProductDetail key={product.id} product={product} />
                })
            }
        </Grid>
    </div>
  )
}

export default ProductList