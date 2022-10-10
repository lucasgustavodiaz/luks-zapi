import Cart from './Cart'
import { logo, user } from '../assets'
import Button from '../components/Button'
import UserMenu from '../components/UserMenu'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'
import * as userActions from '../redux/user/user-actions'

const Navbar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.cart.show)
  const currentUser = useSelector(state => state.user.currentUser)

  const handleToggleCart = () => {
    if (show) {
      dispatch(cartActions.toggleCartHidden())
    }
  }

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }

  return (
    <div className="sticky top-0 right-0 z-[999] flex h-[75px] w-full items-center justify-between border-b border-[#e5edef] bg-white p-[10px]">
      <Link to="/">
        <img src={logo} alt="logo sitio" className="h-auto max-h-[100%] max-w-[200px]" onClick={handleToggleCart} />
      </Link>
      <div className="mr-[20px] flex items-center p-[15px]">
        <Cart />
        <div className="mx-[25px] inline-block h-[25px] border-l border-gray-300" />
        {currentUser ? (
          <div className="relaive">
            <img src={user} alt="usuario" className="h-[32px] w-[32px] cursor-pointer" onClick={handleToggle} />
            <UserMenu user={currentUser} />
            {/* <img src={user} alt="usuario" className="h-[32px] w-[32px] cursor-pointer" onClick={() => auth.signOut()} /> */}
          </div>
        ) : (
          <Link to="/login">
            <Button
              text="Ingresar"
              styles="text-[14px] m-[0px_5px] p-[10px_15px] bg-gradient-to-tl from-[#ff0038] to-[#ff9259] w-[auto] h-[35px] font-normal"
              onClick={handleToggleCart}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
