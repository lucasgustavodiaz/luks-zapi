import { useState, useEffect } from 'react'
import Input from '../components/Input'
import useForm from '../hooks/useForm'
import Button from '../components/Button'
import { google_icon } from '../assets'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils'
import { auth, singInWithGoogle, createUserProfileDocument } from '../firebase/firebase.util'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const navigateTo = useNavigate()
  const [isLoginMode, setIsLoginMode] = useState(true)
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

  useEffect(() => {
    if (currentUser) {
      navigateTo(-1)
    }
  }, [currentUser, navigateTo])

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
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
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: '',
            isValid: false
          }
        },
        false
      )
    }
    setIsLoginMode(prevMode => !prevMode)
  }

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
              {!isLoginMode && (
                <Input
                  id="displayName"
                  label="Nombre"
                  type="text"
                  onInput={inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Campo Obligatorio"
                />
              )}
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
                type="password"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Campo Obligatorio"
              />
            </div>
            <div className="flex flex-col items-center p-[10px] xs:flex-row">
              <Button text={isLoginMode ? 'Ingresar' : 'Registrarme'} styles="text-[14px] h-[40px]" />
              <Button
                text="Login con Google"
                styles="text-[14px] h-[40px] bg-gradient-to-tl from-[#ff0038] to-[#ff9259]"
                img={google_icon}
                onClick={singInWithGoogle}
              />
            </div>
            <div className="flex justify-center p-[10px]">
              <span>{!isLoginMode ? 'Ya tenés una cuenta? ' : 'Todavía no tenés una cuenta?'}</span>
              <a className="ml-2 cursor-pointer text-[#ff0038]" onClick={switchModeHandler}>
                {!isLoginMode ? ' Ingresar' : ' Registrate'}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
