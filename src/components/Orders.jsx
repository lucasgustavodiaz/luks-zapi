import Button from './Button'
import OrderCant from './OrderCant'
import { formatPrice } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import * as cartActions from '../redux/cart/cart-actions'

const Orders = () => {
  const show = useSelector(state => state.cart.show)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const hadlerToggle = () => {
    dispatch(cartActions.toggleCartHidden())
  }
  return (
    <div>
      {show && <div div className="dialog-shadow" onClick={hadlerToggle} />}
      <div
        className={`fixed right-0 top-[75px] z-10 flex h-[calc(100%-75px)] w-[340px] flex-col bg-white shadow-[4px_0px_5px_4px] shadow-gray-500 ${
          show ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500`}
      >
        {cartItems.length === 0 ? (
          <div className="order-container"> Nada por aquí </div>
        ) : (
          <div className="order-container">
            <div className="order-content">Tu pedido: </div>
            {cartItems.map(item => (
              <div className="order-content">
                <div className="order-item">
                  <div
                    className="h-[46px] w-[46px] rounded-[10px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="leading-5">
                    <div>{item.name}</div>
                    <div>{formatPrice(item.price * item.quantity)}</div>
                  </div>
                  <OrderCant item={item} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="dialog-footer">
          <Button text={`Ir a pagar ${formatPrice(total)}`} />
        </div>
      </div>
    </div>
  )
}

export default Orders
