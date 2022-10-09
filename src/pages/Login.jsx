import Input from '../components/Input'
import useForm from '../hooks/useForm'
import Button from '../components/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils'
import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { google_icon } from '../assets'

const Login = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  )
  return (
    <div className="layout-page min-h-[470px] ">
      <div className="wrapper">
        <form className="form-styled">
          <div className="form-content ">
            <div className="p-[24px_32px_15px]">
              <Input
                id="email"
                label="Email"
                type="email"
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText="Campo Obligatorio"
              />
              <Input
                id="password"
                label="Password"
                type="passwword"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Campo Obligatorio"
              />
            </div>
            <div className="flex p-[10px]">
              <Button text="Ingresar" styles="text-[14px] h-[40px]" />
              <Button
                text="Login con Google"
                styles="text-[14px] h-[40px] bg-gradient-to-br from-orange-500 to-red-500"
              />
            </div>
            <div className="flex justify-center p-[10px]">
              <span>Ya tenés una cuenta?</span>
              <a href="" className="ml-2 text-[#ff0038]">
                Registrate
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
