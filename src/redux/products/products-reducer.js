import { Foods } from '../../constants'

const INITIAL_STATE = {
  foods: Foods
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productsReducer
