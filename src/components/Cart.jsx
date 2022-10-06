import { icon_cart } from '../assets'
import { useDispatch } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'

const Cart = () => {
  const dispatch = useDispatch()
  const handleToggleCart = () => {
    dispatch(cartActions.toggleCartHidden())
  }
  return (
    <div
      onClick={handleToggleCart}
      className="w-[45px] h-[45px] relative flex justify-center items-center cursor-pointer"
    >
      <img src={icon_cart} alt="Carrito" className="h-[24px] w-[24px]" />
      <div className="absolute text-[10px] font-bold bottom-[12px]">{0}</div>
    </div>
  )
}

export default Cart
