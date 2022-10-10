import Input from '../components/Input'
import useForm from '../hooks/useForm'
import Button from '../components/Button'
import { google_icon } from '../assets'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils'
// import { auth, singInWithGoogle, createUserProfileDocument } from '../firebase/firebase.util'
import { singInWithGoogle } from '../firebase/firebase.util'
import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'

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

  const handleSubmit = async event => {
    event.preventDefault()
    if (isLoginMode) {
      try {
        await auth.signInWithEmailAndPassword(formState.inputs.email.value, formState.inputs.password.value)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        )

        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="layout-page min-h-[470px] ">
      <div className="wrapper">
        <form className="form-styled" onSubmit={handleSubmit}>
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
            <div className="flex p-[10px]" onClick={singInWithGoogle}>
              <Button text="Ingresar" styles="text-[14px] h-[40px]" />
              <Button
                text="Login con Google"
                styles="text-[14px] h-[40px] bg-gradient-to-tl from-[#ff0038] to-[#ff9259]"
                img={google_icon}
                onClick={singInWithGoogle}
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
