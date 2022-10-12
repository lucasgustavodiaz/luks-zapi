import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Button from './Button'

const OrdersResume = () => {
  let { orderId } = useParams()
  let { orders } = useSelector(state => state.orders)
  let [order] = orders.filter(order => order.id === orderId)

  return (
    <div className="order-status-wrapper">
      <div className="order-status-history">
        <div className="flex items-center justify-start border-b border-[#e5edef] py-[20px]">
          <Link to="/mis-ordenes">
            <Button text="Volver" styles="w-[80px] bg-gradient-to-tl from-[#ff0038] to-[#ff9259]" />
          </Link>
          <div className="w-full">
            <h3>Resumen</h3>
            <p>Orden: {orderId}</p>
          </div>
          <div className="px-[20px]">
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
        </div>
        <div className="p-[20px_10px]">
          <h3 className="mb-[10px]">Productos</h3>
          <div>
            {order.items.map(item => (
              <div className="my-[10px] grid grid-cols-[auto_1fr_auto] items-center justify-between">
                <div
                  className="h-[60px] w-[60px] rounded-full bg-cover"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="w-full px-[20px]">
                  <p>
                    {item.name} - {item.description}
                  </p>
                </div>
                <div className="p-[10px] text-right">
                  <div className="block text-gray-400">{item.quantity}U</div>
                  <strong>${item.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-[#e5edef] p-[20px_10px]">
          <h3>Costos</h3>
          <div>
            <div className="flex items-center justify-between p-[5px]">
              <span>Costo de los productos </span>
              <span>${order.subtotal}</span>
            </div>
            <div className="flex items-center justify-between p-[5px]">
              <span>Costo de envío </span>

              <span>${order.shippingPrice}</span>
            </div>
            <div className="flex items-center justify-between p-[5px]">
              <span>
                <strong>Total</strong>
              </span>

              <span>
                <strong>${order.total}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersResume
