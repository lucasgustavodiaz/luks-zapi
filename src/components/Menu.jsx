import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'

const Menu = ({ setOpenFood }) => {
  const Foods = useSelector(state => state.products.foods)
  const Categories = useSelector(state => state.categories.categories)
  return (
    <div className="z-10 flex justify-center">
      <div className="w-[100%] max-w-[1200px] py-[50px] px-[50px]">
        <h2 className="border-y border-orange-400 py-[10px]">Menu</h2>
        <div className="tag-menu">
          {Categories.map(category => (
            <div className="tag-card">
              <img src={category.imgTag} alt={category.section} className="mr-[20px] w-[30px] rounded-[50%]" />
              <p className="text-[#5e5e5e]">{category.section}</p>
            </div>
          ))}
        </div>
        {Object.entries(Foods).map(([sectionKey, foods]) => {
          return (
            <div>
              <h3 className="border-b border-orange-400 py-[10px]">{sectionKey}</h3>
              <div className="grid grid-cols-3 gap-5 p-[50px]">
                {foods.map(food => {
                  return <FoodCard key={food.id} {...food} onClick={() => setOpenFood(food)} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
