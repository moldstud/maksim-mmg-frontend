import { FETCH_PERSON } from '../constants/actionTypes'

const initialState = {
  data: null
}

const person = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...initialState,
        data: action.data
      }
    default:
      return state
  }
}

export default person