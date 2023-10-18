import { Image } from "@mui/icons-material";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import products from '../../mocks/menu.json'
import useAsyncMock from '../../hooks/useAsyncMock.jsx'

const ProductDetail = () =>{
    const {id} = useParams();
    console.log('ProductDetail id',id);
    const {data, loading} = useAsyncMock(products);

    if (loading) return <CircularProgress />

    const {imagen,nombre, ingredientes, precio, categoria} = data.find(product => product.id === id);

    return (
        <Card className="card-products-container" >
            <CardContent>
                <Typography variant="h5">{nombre}</Typography>
                <Image src={imagen} />
                {ingredientes.trim().length > 0 && (<Typography>Ingredientes: {ingredientes}</Typography>)}
                <Typography>{precio.toFixed(2)}</Typography>
                <Typography>{categoria}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProductDetail;