import React, { useReducer, useEffect } from 'react'
import { validate } from '../utils'

const CHANGE = 'CHANGE'
const TOUCHE = 'TOUCHE'

const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }
    case TOUCHE:
      return {
        ...state,
        isTouche: true
      }

    default:
      return state
  }
}

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouche: false,
    isValid: props.initialValid || false
  })

  const { isValid, value } = inputState
  const { onInput, id } = props

  useEffect(() => {
    onInput(id, value, isValid)
  }, [onInput, id, value, isValid])

  const changeHandler = event => {
    dispatch({
      type: CHANGE,
      val: event.target.value,
      validators: props.validators
    })
  }

  const toucheHandler = event => {
    dispatch({
      type: TOUCHE
    })
  }

  const showError = !inputState.isValid && inputState.isTouche

  return (
    <div className="my-4">
      <div htmlFor={props.id} className={`mb-2 py-[4px] font-bold ${showError ? `text-red-500` : null}`}>
        {props.label}
      </div>
      <div
        className={`relative flex flex-row items-center justify-start rounded-[15px] bg-[#f4f4f4] py-[4px] text-[16px] text-[#7d7d7d] shadow-[0px_6px_10px_0px_rgba(128,98,96,16%)] focus:bg-white focus:outline-0 ${
          showError ? `border-red-500 bg-[#ffd1d1]` : null
        }`}
      >
        <input
          className={`focus: block h-[25px] w-full rounded-[15px] border-none bg-transparent px-4 text-[#7d7d7d]  focus:border-black focus:bg-transparent focus:outline-none ${
            showError ? `caret-[#ff441f]` : null
          }`}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={toucheHandler}
          value={inputState.value}
        />
      </div>
      {!inputState.isValid && inputState.isTouche && (
        <p className="mx-[16px] py-[4px] text-red-500">{props.errorText}</p>
      )}
    </div>
  )
}

export default Input
