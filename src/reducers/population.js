import { FETCH_POPULATION, FETCH_POPULATION_SUCCESS, FETCH_POPULATION_FAILURE } from '../constants/actionTypes'

const initialState = {
  list: null,
  isLoading: false,
  errorMessage: null
}

const population = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULATION:
      return {
        ...initialState,
        isLoading: true
      }
    case FETCH_POPULATION_SUCCESS:
      return {
        ...initialState,
        list: action.list
      }
    case FETCH_POPULATION_FAILURE:
      return {
        ...initialState,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

export default population