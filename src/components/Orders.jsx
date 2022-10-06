import Button from './Button'
import { formatPrice } from '../utils'
import { useSelector } from 'react-redux'

const Orders = ({ orders }) => {
  const hidden = useSelector(state => state.cart.hidden)
  return (
    <div
      className={`fixed flex flex-col right-0 top-[75px] w-[340px] bg-white h-[calc(100%-75px)] z-10 shadow-[4px_0px_5px_4px] shadow-gray-500 ${
        hidden ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-500`}
    >
      {orders.length === 0 ? (
        <div className="order-container"> Nada por aquí </div>
      ) : (
        <div className="order-container">
          <div className="order-content">Tu pedido: </div>
          {orders.map(order => (
            <div className="order-content">
              <div className="order-item">
                <div>1</div>
                <div>{order.name}</div>
                <div>{formatPrice(order.price)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="dialog-footer">
        <Button text={`Ir a pagar:`} />
      </div>
    </div>
  )
}

export default Orders
