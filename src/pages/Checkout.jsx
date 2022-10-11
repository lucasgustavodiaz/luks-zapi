import CheckoutForm from '../components/CheckoutForm'
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
    <div className="layout-page min-h-[670px] ">
      <div className="wrapper">
        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout
