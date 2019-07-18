import { fetchPerson, fetchPopulation, setCurrentPage, setFilter, setPageSize } from '../../actions'
import { FETCH_PERSON, SET_CURRENT_PAGE, SET_FILTER, SET_PAGE_SIZE } from '../../constants/actionTypes'
import { populationList } from '../fixtures'

describe('actions', () => {

  it('fetchPopulation', async () => {
    const {list} = await fetchPopulation()(action => action)

    expect(Array.isArray(list)).toEqual(true)
    expect(list.length).toBeGreaterThan(0)

    const person = list[0]

    expect(person).toHaveProperty('id')
    expect(person).toHaveProperty('name')
    expect(person).toHaveProperty('age')
    expect(person).toHaveProperty('weight')
    expect(person).toHaveProperty('height')
    expect(person).toHaveProperty('hair_color')
    expect(person).toHaveProperty('professions')
    expect(person).toHaveProperty('friends')
  })

  it('setCurrentPage', () => {
    const currentPage = 2
    const expectedAction = {type: SET_CURRENT_PAGE, currentPage}

    expect(setCurrentPage(currentPage)).toEqual(expectedAction)
  })

  it('setPageSize', () => {
    const pageSize = 20
    const expectedAction = {type: SET_PAGE_SIZE, pageSize}

    expect(setPageSize(pageSize)).toEqual(expectedAction)
  })

  it('setFilter', () => {
    const filter = 'red'
    const expectedAction = {type: SET_FILTER, filter}

    expect(setFilter(filter)).toEqual(expectedAction)
  })

  it('fetchPerson', () => {
    const data = populationList[0]
    const expectedAction = {type: FETCH_PERSON, data}

    expect(fetchPerson(populationList[0].id, populationList)).toEqual(expectedAction)
  })

})