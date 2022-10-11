import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { formatDate, formatPrice } from '../utils'

const OrdersStatus = ({ orders }) => {
  let { pathname } = useLocation()
  return (
    <div className="z-[10] min-h-[100vh] w-[70%]">
      <div className="w-[100%] rounded-[20px] bg-[#0000003d] p-[30px] text-white backdrop-blur-[20px]">
        <div className="max-w-[1000px] p-[10px]">
          <div className="mb-[20px] border-b border-[#e5edef] pb-[20px]">
            <h2>Mis últimos pedidos!</h2>
            <p>
              Haz seguimiento al detalle de tus pedidos anteriores y solicita ayuda si hay algún inconveniente con una
              de tus compras.
            </p>
          </div>
          <div>
            {orders.map(order => (
              <div>
                <div>
                  <div>
                    <p>
                      <span>Fecha:</span>
                      {formatDate(new Date(order.createdAt.seconds))}
                    </p>
                    <p>
                      <span>Total:</span>
                      {formatPrice(order.total)}
                    </p>
                  </div>
                  <div>
                    <div type={order.status}>{order.status}</div>
                  </div>
                  <div>
                    <Link to={`${pathname}/${order.id}`}>
                      <Button
                        text="Ver resumen"
                        styles="w-[150px] m-[0px] bg-gradient-to-tl from-[#ff0038] to-[#ff9259]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersStatus
