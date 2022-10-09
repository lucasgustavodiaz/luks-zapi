import { icon_cart } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'

const Cart = () => {
  const dispatch = useDispatch()
  const quantity = useSelector(state =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  )
  const handleToggleCart = () => {
    dispatch(cartActions.toggleCartHidden())
  }
  return (
    <div onClick={handleToggleCart} className="relative flex h-[45px] cursor-pointer items-center justify-center">
      <img src={icon_cart} alt="Carrito" className="h-[24px] w-[24px]" />
      <div className="absolute bottom-[12px] text-[10px] font-bold">{quantity}</div>
    </div>
  )
}

export default Cart
