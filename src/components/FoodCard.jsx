import { formatPrice } from '../utils'

const FoodCard = ({ name, img, price, onClick }) => {
  return (
    <div
      className="h-[200px] rounded-lg bg-cover bg-center cursor-pointer overflow-hidden p-[10px] relative shadow-md hover:shadow-3xl transition-shadow"
      onClick={onClick}
    >
      <img
        src={img}
        alt={name}
        className="contrast-75 hover:contrast-100 hover:scale-[1.2] absolute top-0 left-0 object-cover w-[100%] h-[100%] transition-all duration-500"
      />
      <div className="absolute text-[20px] font-bold text-white p-[10px] w-[100%] bottom-0 left-0 bg-black/[0.44]">
        <h3>{name}</h3>
        <h3>{formatPrice(price)}</h3>
      </div>
    </div>
  )
}

export default FoodCard
