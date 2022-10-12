import FoodCard from './FoodCard'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Menu = ({ setOpenFood }) => {
  const [section, setSection] = useState(null)
  let Foods = useSelector(state => state.products.foods)
  const Categories = useSelector(state => state.categories.categories)

  if (section) {
    Foods = { [section]: Foods[section] }
  }

  return (
    <div className="z-10 flex justify-center">
      <div className="w-[100%] max-w-[1200px] py-[50px] px-[50px]">
        <h2 className="border-y border-orange-400 py-[10px]">Menu</h2>
        <div className="tag-menu">
          {section && (
            <div className="tag-card" onClick={() => setSection(null)}>
              <div className="mr-[20px] h-[30px] w-[30px] rounded-full bg-[#ff0038]" />
              <p className="text-[#5e5e5e]">Todos</p>
            </div>
          )}
          {Categories.map(category => (
            <div
              className={`tag-card ${category.section === section ? 'bg-[#e8e8e8]' : 'bg-[#fff]'}`}
              onClick={() => setSection(category.section)}
            >
              <img src={category.imgTag} alt={category.section} className="mr-[20px] w-[30px] rounded-full" />
              <p className="text-[#5e5e5e]">{category.section}</p>
            </div>
          ))}
        </div>
        {Object.entries(Foods).map(([sectionKey, foods]) => {
          return (
            <div>
              <h3 className="border-b border-orange-400 py-[10px]">{sectionKey}</h3>
              <div className="grid grid-cols-1 gap-5 p-0 pt-[50px] ss:grid-cols-2 sm:grid-cols-3 sm:p-[50px] ">
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
