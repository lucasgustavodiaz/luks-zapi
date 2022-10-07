import { Banner, Menu, FoodDialog } from '../components'

const Home = ({ openFood }) => {
  return (
    <div>
      <FoodDialog {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </div>
  )
}

export default Home
