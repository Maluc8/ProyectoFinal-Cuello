import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import AddProduct from "../AddProduct/AddProduct";

const Product = ({ product }) => {
    const { id, imagen, nombre, precio } = product;

    return (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container">
                <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <CardContent>
                        <Typography variant="h5">{nombre}</Typography>
                        <img src={imagen} alt={nombre} style={{ width: '45vh', height: 'auto', objectFit: 'cover' }} />
                        <Typography>{precio.toFixed(2)}</Typography>
                    </CardContent>
                </Link>
                <AddProduct id={id} />
            </Card>
        </Grid>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired
    }).isRequired
};

export default Product;

