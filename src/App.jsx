import { Navbar, Orders } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useOpenFood } from './hooks/useOpenFood'

import { Home, Checkout, Login } from './pages/'

const App = () => {
  const openFood = useOpenFood()
  return (
    <BrowserRouter className="w-full">
      <Navbar />
      <Orders />
      <Routes>
        <Route path="/" element={<Home openFood={openFood} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home openFood={openFood} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
