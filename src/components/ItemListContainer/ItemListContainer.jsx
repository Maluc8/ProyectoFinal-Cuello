import { CircularProgress, Grid, Typography } from '@mui/material';
import useAsyncMock from '../../hooks/useAsyncMock.jsx';
import products from '../../mocks/menu.json';
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    let {data, loading}= useAsyncMock(products);
    const{id} = useParams()
    if(loading) return <CircularProgress />
    
    if(id){
      data = data.filter(product => product.categoria === id)
    }

  return (
    <div className='container'>
        <Typography variant={'h2'}>Menu</Typography>
        <Grid container spacing={3}>
            {
                data.map(product =>{
                    return <Product key={product.id} product={product} />
                })
            }
        </Grid>
    </div>
  )
}

export default ItemListContainer;
