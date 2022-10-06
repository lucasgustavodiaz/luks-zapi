import { icon_del } from '../assets'
import * as cartActions from '../redux/cart/cart-actions'
import { useDispatch } from 'react-redux'

const OrderCant = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="order-quantitys">
      <div className="order-quantity-btn">
        {+item.quantity === 1 ? (
          <img
            src={icon_del}
            alt="eliminar"
            className="scale-[1.3]"
            onClick={() => dispatch(cartActions.removeItem(item))}
          />
        ) : (
          <div onClick={() => dispatch(cartActions.removeItem(item))}>-</div>
        )}
      </div>
      <div className="w-[24px] text-center font-montserrat text-[14px] font-bold">{item.quantity}</div>
      <div className="order-quantity-btn" onClick={() => dispatch(cartActions.addItem(item))}>
        +
      </div>
    </div>
  )
}

export default OrderCant
