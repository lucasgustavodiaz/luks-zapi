import Cart from './Cart'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'

const Navbar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.cart.show)
  const handleToggleCart = () => {
    if (show) {
      dispatch(cartActions.toggleCartHidden())
    }
  }
  return (
    <div className="sticky top-0 right-0 z-[999] flex h-[75px] w-full items-center justify-between border-b border-[#e5edef] bg-white p-[10px]">
      <Link to="/">
        <img src={logo} alt="logo sitio" className="h-auto max-h-[100%] max-w-[200px]" onClick={handleToggleCart} />
      </Link>
      <div className="mr-[20px] flex p-4">
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
