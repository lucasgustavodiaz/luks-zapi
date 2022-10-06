import { logo } from '../assets'
import Cart from './Cart'

const Navbar = () => (
  <div className="p-[10px] sticky top-0 right-0 w-full z-[999] h-[75px] bg-white border-b border-[#e5edef] flex justify-between items-center">
    <img src={logo} alt="logo sitio" className="max-w-[200px] max-h-[100%] h-auto" />
    <div className="flex p-4 mr-[20px]">
      <Cart />
    </div>
  </div>
)

export default Navbar
