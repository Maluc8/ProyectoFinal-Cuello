import { Image } from "@mui/icons-material";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFirestore from '../../hooks/useFirestore.jsx';
import AddProduct from "../AddProduct/AddProduct";

const ProductDetail = () => {
    const { id } = useParams();
    const { data, loading } = useFirestore('menu', id, false);

    if (loading) return <CircularProgress />;

    if (!data) {
        return <Typography>Producto no encontrado.</Typography>;
    }

    const { imagen, nombre, ingredientes, precio, categoria } = data;

    return (
        <Card className="card-products-container">
            <CardContent>
                <Typography variant="h5">{nombre}</Typography>
                <Image src={imagen} />
                {ingredientes && ingredientes.trim().length > 0 && <Typography>Ingredientes: {ingredientes}</Typography>}
                <Typography>{precio.toFixed(2)}</Typography>
                <Typography>{categoria}</Typography>
                <AddProduct id={id} />
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
