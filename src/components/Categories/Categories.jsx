import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import useAsyncMock from '../../hooks/useAsyncMock';
import products from '../../mocks/menu.json'
import { Link } from 'react-router-dom';

function Categories() {
    const {data, loading} = useAsyncMock(products);
    if(loading) return <CircularProgress />;
    const categories = [];
    let categoryId = 1;
    data.forEach(product => {
        if(!categories.some(category => category.category === product.categoria)){
            categories.push({id:categoryId,category:product.categoria});
            categoryId++;
        }
    });
  return (
    <div className='container'>
        <Typography variant={'h2'}>Categorias:</Typography>
        <Card key='99'>
            <CardContent component={Link} to={'/'}>
                <Typography>Todo</Typography>
            </CardContent>
        </Card>
        {
            categories.map(category =>{
                return(
                    <Card key={category.id}>
                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <Typography>{category.category}</Typography>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default Categories