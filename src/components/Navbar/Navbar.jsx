import CartWidget from '../CartWiget/CartWidget';
import './Nabvar.css';
import { AppBar, Toolbar, Link} from '@mui/material';

const Navbar = () => {
    return (
    <AppBar>
        <Toolbar sx={{display: 'flex',justifyContent: 'space-around' }}>
            <Link sx={{color:'black'}} href='/'>
            Pizzeria
            </Link>
            <Link sx={{color:'white'}} href='/categories'>
                Categorias
            </Link>
            <CartWidget/>
        </Toolbar>
    </AppBar>
    )
};

export default Navbar;