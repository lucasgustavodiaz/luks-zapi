import CheckoutForm from '../components/CheckoutForm'
import { checkout } from '../assets'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const navigateTo = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigateTo('/login')
    }
  }, [currentUser, navigateTo])

  return (
    <div className="order-status-container" style={{ backgroundImage: `url(${checkout})` }}>
      <div className="wrapper">
        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout
