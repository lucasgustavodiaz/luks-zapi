import Input from './Input'
import CheckoutSummary from './CheckoutSummary'
import useForm from '../hooks/useForm'
import { VALIDATOR_REQUIRE } from '../utils'

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

  return (
    <form className="z-2 flex w-full max-w-[600px] flex-col items-center justify-center justify-self-center">
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
      <CheckoutSummary isValid={!formState.isValid} />
    </form>
  )
}

export default CheckoutForm
