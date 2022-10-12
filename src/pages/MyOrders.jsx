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
    <div className="order-status-container" style={{ backgroundImage: `url(${checkout})` }}>
      <OrdersStatus orders={orders} />
    </div>
  )
}

export default MyOrders
