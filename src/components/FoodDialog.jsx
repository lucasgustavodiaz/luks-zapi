import { formatPrice } from '../utils'
import Button from './Button'
import { useDispatch } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'

const FoodDialogContainer = ({ openFood, setOpenFood }) => {
  const dispatch = useDispatch()

  const handlerClose = () => {
    setOpenFood()
  }

  const addToOrder = () => {
    dispatch(cartActions.addItem(openFood))
    handlerClose()
  }

  return (
    <div>
      <div div className="dialog-shadow" onClick={handlerClose} />
      <div className="fixed top-[150px] left-[calc(50%-175px)] z-[97] flex max-h-[calc(100%-100px)] w-[350px] flex-col rounded-lg bg-white ss:left-[calc(50%-250px)] ss:w-[500px]">
        <div
          className="mb-[20px] min-h-[150px] rounded-t-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${openFood.img})` }}
        >
          <div className="text[15px] absolute top-[75px] bg-white/70 p-[5px_10px]">
            <h3 className="text-2xl font-bold">{openFood.name}</h3>
          </div>
        </div>

        <div className="max-h-[200px] min-h-[100px] overflow-auto p-4">
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
