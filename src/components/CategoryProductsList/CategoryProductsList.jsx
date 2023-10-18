import {useParams} from 'react-router-dom';
import useAsyncMock from '../../hooks/useAsyncMock';
import products from '../../mocks/menu.json';
import { CircularProgress, Grid } from '@mui/material';
import ProductDetail from '../ProductDetail/ProductDetail.jsx'

function CategoryProductsList() {
    const {id} = useParams();
    const {data, loading} = useAsyncMock(products);

    if (loading) return <CircularProgress />

    const categorySelected = data.filter(category => id === category.categoria)
  return (
    <div>
        <Grid container spacing={3}>
            {categorySelected.map((product) => {
                return <ProductDetail key={product.id} product={product} />
            })}
        </Grid>
    </div>
  )
}

export default CategoryProductsList