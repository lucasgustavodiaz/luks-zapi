import { formatPrice } from '../utils'
import Button from './Button'
// import Spinner from './Spinner'
import { useSelector } from 'react-redux'

const CheckoutSummary = () => {
  // const { loading } = useSelector(state => state.orders)
  const loading = false
  return (
    <div className="w-full max-w-[600px] ">
      <div className="mt-[62px] w-full rounded-[15px] bg-white shadow-[0px_6px_10px_0px_rgba(128,98,96,16%)] ">
        <div className="rounded-[15px] bg-white p-[24px_32px_15px]">
          {loading ? (
            // <Spinner />
            <div></div>
          ) : (
            <div>
              <ul>
                <li className="li-card">
                  <p>Costo de Productos</p>
                  <span>{formatPrice(0)}</span>
                </li>
                <li className="li-card">
                  <p>Costo de Envío</p>
                  <span>{formatPrice(0)}</span>
                </li>
              </ul>
              <hr />
              <div className="flex items-center justify-between p-[10px]">
                <h4>Total</h4>
                <h4>{formatPrice(0)}</h4>
              </div>
              <Button text="Pagar" styles="w-[100%] m-[10px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
