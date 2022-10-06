import { Navbar, Banner, Menu, FoodDialog, Orders } from './components'

import { useOpenFood } from './hooks/useOpenFood'

const App = () => {
  const openFood = useOpenFood()
  return (
    <div className="w-full">
      <FoodDialog {...openFood} />
      <Navbar />
      <Orders />
      <Banner />
      <Menu {...openFood} />
    </div>
  )
}

export default App
