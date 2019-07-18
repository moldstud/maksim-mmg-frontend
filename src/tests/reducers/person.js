import person from '../../reducers/person'
import { personInitialState, populationList } from '../fixtures'
import { FETCH_PERSON } from '../../constants/actionTypes'

describe('person reducer', () => {

  it('should return the initial state', () => {
    expect(person(undefined, {})).toEqual(personInitialState)
  })

  it('should handle FETCH_PERSON', () => {
    const data = populationList[0]
    expect(person({}, {type: FETCH_PERSON, data}))
      .toEqual({
        ...personInitialState,
        data
      })
  })
})