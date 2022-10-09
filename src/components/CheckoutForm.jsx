import Input from './Input'
import CheckoutSummary from './CheckoutSummary'
import useForm from '../hooks/useForm'
import { VALIDATOR_REQUIRE } from '../utils'
import { CONSTO_ENVIO } from '../utils'
import { useSelector } from 'react-redux'

const CheckoutForm = () => {
  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false
      },
      localidad: {
        value: '',
        isValid: false
      }
    },
    false
  )

  const { cartItems } = useSelector(state => state.cart)

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <form className="z-2 flex w-full max-w-[600px] flex-col items-center justify-center">
      <div className="w-full rounded-[15px] bg-white p-[30px] shadow-[0px_6px_10px_0px_rgba(128,98,96,16%)]">
        <Input
          id="domicilio"
          label="Domicilio"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Campo Obligatorio"
        />

        <Input
          id="localidad"
          label="Localidad"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Campo Obligatorio"
        />
      </div>
      <CheckoutSummary isValid={!formState.isValid} subTotal={subTotal} envio={CONSTO_ENVIO} />
    </form>
  )
}

export default CheckoutForm
