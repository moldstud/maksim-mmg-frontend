import {
  FETCH_POPULATION,
  FETCH_POPULATION_SUCCESS,
  FETCH_POPULATION_FAILURE,
  SET_CURRENT_PAGE,
  SET_PAGE_SIZE, SET_FILTER,
} from '../constants/actionTypes'
import { DEFAULT_PAGE_SIZE } from '../constants/config'

const initialState = {
  originalList: null,
  list: null,
  isLoading: false,
  errorMessage: null,
  currentPage: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  filter: null
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize,
        currentPage: 1
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
        currentPage: 1
      }
    default:
      return state
  }
}

export default population