import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { formatDate, formatPrice } from '../utils'

const OrdersStatus = ({ orders }) => {
  let { pathname } = useLocation()

  return (
    <div className="order-status-wrapper">
      <div className="order-status-history">
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
              <div className="mb-[30px] flex h-[200px] flex-row items-center justify-center overflow-hidden rounded-[8px] border border-[#e5edef] bg-white">
                <div className="relative flex w-[100%] flex-wrap items-center justify-between gap-[10px] p-[30px] sm:flex-nowrap">
                  <div className="flex w-[100%] flex-col justify-center">
                    {/* SACAR W-100 */}
                    <p className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap align-top leading-[1.7] text-[#7d7d7d]">
                      <span className="inline-block min-w-[50px] pr-[5px] text-[#332927]">Fecha:</span>
                      {formatDate(new Date(order.createdAt.seconds))}
                    </p>
                    <p className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap align-top leading-[1.7] text-[#7d7d7d]">
                      <span className="inline-block min-w-[50px] pr-[5px] text-[#332927]">Total:</span>
                      {formatPrice(order.total)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div
                      className={`rounded-[0px_8px] p-[8px_18px] text-center font-semibold ${
                        order.status == 'aprobado'
                          ? 'bg-[rgba(12,198,101,.1)] text-[#0cc665]'
                          : order.status == 'pendiente'
                          ? 'bg-[rgba(255,213,89,.09)] text-[#ffd559]'
                          : order.status == 'cancelado'
                          ? 'bg-[rgba(255,68,31,.09)] text-[#ff441f]'
                          : null
                      }`}
                    >
                      {order.status}
                    </div>
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
