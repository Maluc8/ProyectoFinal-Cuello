import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
  const itemsCount = useContext(cartContext).items.length;
  return (
    <div>
        <ShoppingCartRoundedIcon />
        <span>({itemsCount})</span>
    </div>
  )
}

export default CartWidget