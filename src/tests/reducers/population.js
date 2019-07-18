import population from '../../reducers/population'
import { populationInitialState, populationList } from '../fixtures'
import { FETCH_POPULATION, FETCH_POPULATION_FAILURE, FETCH_POPULATION_SUCCESS } from '../../constants/actionTypes'

describe('population reducer', () => {

  it('should return the initial state', () => {
    expect(population(undefined, {})).toEqual(populationInitialState)
  })

  it('should handle FETCH_POPULATION', () => {
    expect(population({}, {type: FETCH_POPULATION}))
      .toEqual({
        ...populationInitialState,
        isLoading: true
      })
  })

  it('should handle FETCH_SUCCESS', () => {
    expect(population({}, {type: FETCH_POPULATION_SUCCESS, list: populationList}))
      .toEqual({
        ...populationInitialState,
        list: populationList
      })
  })

  it('should handle FETCH_POPULATION', () => {
    const errorMessage = 'Something wrong on server side'
    expect(population({}, {type: FETCH_POPULATION_FAILURE, errorMessage}))
      .toEqual({
        ...populationInitialState,
        errorMessage
      })
  })
})