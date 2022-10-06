import { formatPrice } from '../utils'
import Button from './Button'

const FoodDialogContainer = ({ openFood, setOpenFood, orders, setOrders }) => {
  const handlerClose = () => {
    setOpenFood()
  }

  const order = { ...openFood }

  const addToOrder = () => {
    setOrders([...orders, order])
    handlerClose()
  }

  return (
    <div>
      <div div className="fixed w-[100%] h-[100%] bg-black/90 z-[19]" onClick={handlerClose} />
      <div className="bg-white fixed top-[150px] left-[calc(50%-250px)] flex flex-col max-h-[calc(100%-100px)] rounded-lg w-[500px] z-[30]">
        <div
          className="min-h-[150px] mb-[20px] bg-center bg-cover rounded-t-lg"
          style={{ backgroundImage: `url(${openFood.img})` }}
        >
          <div className="absolute p-[5px_10px] top-[75px] text[15px] bg-white/70">
            <h3 className="text-2xl font-bold">{openFood.name}</h3>
          </div>
        </div>

        <div className="min-h-[100px] max-h-[200px] overflow-auto p-4">
          <p>{openFood.description}</p>
        </div>
        <div className="dialog-footer">
          <Button text={`Agregar: ${formatPrice(openFood.price)}`} onClick={addToOrder} />
        </div>
      </div>
    </div>
  )
}

const FoodDialog = props => {
  if (!props.openFood) return null
  return <FoodDialogContainer {...props} />
}

export default FoodDialog
