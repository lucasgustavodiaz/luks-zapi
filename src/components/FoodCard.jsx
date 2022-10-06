import { formatPrice } from '../utils'

const FoodCard = ({ name, img, price, onClick }) => {
  return (
    <div
      className="relative h-[200px] cursor-pointer overflow-hidden rounded-lg bg-cover bg-center p-[10px] shadow-md transition-shadow hover:shadow-3xl"
      onClick={onClick}
    >
      <img
        src={img}
        alt={name}
        className="absolute top-0 left-0 h-[100%] w-[100%] object-cover contrast-75 transition-all duration-500 hover:scale-[1.2] hover:contrast-100"
      />
      <div className="absolute bottom-0 left-0 w-[100%] bg-black/[0.44] p-[10px] text-[20px] font-bold text-white">
        <h3>{name}</h3>
        <h3>{formatPrice(price)}</h3>
      </div>
    </div>
  )
}

export default FoodCard
