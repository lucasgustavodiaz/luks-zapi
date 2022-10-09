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

  const handlerSubmit = e => {
    e.preventDefault()
    if (!formState.isValid) {
      console.log('Completar todo los dato PANCHOOOOO!!')
      return
    }
    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value
      },
      items: [...cartItems],
      shippingPrice: CONSTO_ENVIO,
      subtotal: subTotal,
      total: CONSTO_ENVIO + subTotal
    }
    dispatch(orderActions.createOrder(orderData))
    dispatch(cartActions.clearCart())

    console.log('YEAAAA mandale no ma!')
  }

  return (
    <form className="form-styled" onSubmit={handlerSubmit}>
      <div className="form-content p-[30px] ">
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
