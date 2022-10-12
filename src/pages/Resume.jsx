import OrdersResume from '../components/OrdersResume'
import { checkout } from '../assets'

const Resume = () => {
  return (
    <div className="order-status-container" style={{ backgroundImage: `url(${checkout})` }}>
      <OrdersResume />
    </div>
  )
}

export default Resume
