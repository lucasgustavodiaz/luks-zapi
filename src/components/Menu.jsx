import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'

const Menu = ({ setOpenFood }) => {
  const Foods = useSelector(state => state.products.foods)
  const Categories = useSelector(state => state.categories.categories)
  return (
    <div className="flex justify-center z-10">
      <div className="py-[50px] px-[50px] w-[100%] max-w-[1200px]">
        <h2 className="border-y border-orange-400 py-[10px]">Menu</h2>
        <div className="tag-menu">
          {Categories.map(category => (
            <div className="tag-card">
              <img src={category.imgTag} alt={category.section} className="w-[30px] rounded-[50%] mr-[20px]" />
              <p className="text-[#5e5e5e]">{category.section}</p>
            </div>
          ))}
        </div>
        {Object.entries(Foods).map(([sectionKey, foods]) => {
          return (
            <div>
              <h3 className="py-[10px] border-b border-orange-400">{sectionKey}</h3>
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
