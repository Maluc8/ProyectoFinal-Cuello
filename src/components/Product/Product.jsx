import { Image } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography} from "@mui/material";
import {Link } from 'react-router-dom'

const product = ({product, children }) =>{
    const {id, imagen, nombre, ingredientes, precio, categoria} = product;
    return (<Grid item key={id} xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container" >
            <CardContent component={Link} to={`/item/${id}`}>
                <Typography variant="h5">{nombre}</Typography>
                <Image src={imagen} />
                <Typography>{precio.toFixed(2)}</Typography>
            </CardContent>
        </Card>
    </Grid>)
}

export default product;