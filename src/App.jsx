import { Navbar, Banner, Menu, FoodDialog, Orders } from './components'

import { useOpenFood } from './hooks/useOpenFood'
import { useOrders } from './hooks/useOrders'

const App = () => {
  const openFood = useOpenFood()
  const orders = useOrders()
  return (
    <div className="w-full">
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Orders {...orders} />
      <Banner />
      <Menu {...openFood} />
    </div>
  )
}

export default App
