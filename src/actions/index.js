import { POPULATION_API_URL, TOWN_NAME } from '../constants/config'
import { FETCH_POPULATION_FAILURE, FETCH_POPULATION, FETCH_POPULATION_SUCCESS } from '../constants/actionTypes'

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