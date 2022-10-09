import Input from '../components/Input'
import useForm from '../hooks/useForm'
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
    <div className="layout-page">
      <div className="wrapper">
        <form className="form-styled">
          <div className="form-content">
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
        </form>
      </div>
    </div>
  )
}

export default Login
