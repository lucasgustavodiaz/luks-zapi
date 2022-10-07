import { Navbar, Orders } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useOpenFood } from './hooks/useOpenFood'

import { Home, Checkout } from './pages/'

const App = () => {
  const openFood = useOpenFood()
  return (
    <BrowserRouter className="w-full">
      <Navbar />
      <Orders />
      <Routes>
        <Route path="/" element={<Home openFood={openFood} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
