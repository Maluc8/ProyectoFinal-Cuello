import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from '@mui/material'

const CartWidget = () => {
  const itemsCount = useContext(cartContext).items.length;
  return (
    <Link href="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ShoppingCartRoundedIcon />
      <span>({itemsCount})</span>
    </div>
  </Link>
  )
}

export default CartWidget