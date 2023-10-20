import { Image } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography} from "@mui/material";
import {Link } from 'react-router-dom'
import Counter from '../Counter/Counter.jsx'

const product = ({product}) =>{
    const {id, imagen, nombre, precio} = product;
    console.log(`./public/${imagen}`);
    return (<Grid item key={id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container" >
            <CardContent component={Link} to={`/item/${id}`}>
                <Typography variant="h5">{nombre}</Typography>
                <Image src={`./public/${imagen}`} />
                <Typography>{precio.toFixed(2)}</Typography>
            </CardContent>
            <Counter/>
        </Card>
    </Grid>)
}

export default product;