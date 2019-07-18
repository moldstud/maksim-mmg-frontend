import { POPULATION_API_URL, TOWN_NAME } from '../constants/config'
import {
  FETCH_POPULATION_FAILURE,
  FETCH_POPULATION,
  FETCH_POPULATION_SUCCESS,
  SET_CURRENT_PAGE,
  SET_PAGE_SIZE,
  SET_FILTER,
  FETCH_PERSON
} from '../constants/actionTypes'

export const fetchPopulation = () => async dispatch => {
  dispatch({type: FETCH_POPULATION})

  try {
    const response = await fetch(POPULATION_API_URL)

    if (response.ok) {
      const json = await response.json()
      const list = json[TOWN_NAME]

      dispatch({type: FETCH_POPULATION_SUCCESS, list})
    }

  } catch (error) {
    dispatch({type: FETCH_POPULATION_FAILURE, errorMessage: error.message})
  }
}

export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
}

export const setPageSize = (pageSize) => {
  return {type: SET_PAGE_SIZE, pageSize}
}

export const setFilter = (filter) => {
  return {type: SET_FILTER, filter}
}

export const fetchPerson = (id, list) => {
  const data = list.find(item => item.id.toString() === id.toString())

  return {type: FETCH_PERSON, data}
}