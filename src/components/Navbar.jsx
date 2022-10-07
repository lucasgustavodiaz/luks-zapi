import { logo } from '../assets'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="sticky top-0 right-0 z-[999] flex h-[75px] w-full items-center justify-between border-b border-[#e5edef] bg-white p-[10px]">
    <Link to="/">
      <img src={logo} alt="logo sitio" className="h-auto max-h-[100%] max-w-[200px]" />
    </Link>
    <div className="mr-[20px] flex p-4">
      <Cart />
    </div>
  </div>
)

export default Navbar
