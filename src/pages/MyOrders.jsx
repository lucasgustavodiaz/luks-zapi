import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import OrdersStatus from '../components/OrdersStatus'
import * as orderActions from '../redux/orders/order-actions'
import { checkout } from '../assets'

const MyOrders = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  let { orders, error } = useSelector(state => state.orders)
  const navigateTo = useNavigate()
  const dispatch = useDispatch()

  const fetchOrders = useCallback(async () => {
    await dispatch(orderActions.fetchOrders(currentUser?.id))
  }, [dispatch, currentUser])

  // useEffect(() => {
  //   if (currentUser) {
  //     navigateTo('/')
  //   }
  // }, [currentUser, navigateTo])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <div
      className="flex h-[auto] min-h-[calc(100vh-75px)] w-[100vw] items-center justify-center bg-cover bg-fixed bg-center p-[10px] before:fixed before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient-to-tl before:from-[#f83600] before:to-[#ff9259] before:mix-blend-color before:content-[''] after:fixed after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-[#000000bd] after:content-['']"
      style={{ backgroundImage: `url(${checkout})` }}
    >
      <OrdersStatus orders={orders} />
    </div>
  )
}

export default MyOrders
