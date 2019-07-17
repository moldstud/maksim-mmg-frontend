import { combineReducers } from 'redux'
import population from './population'
import person from './person'

export default combineReducers({
  population,
  person
})