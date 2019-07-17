import { FILTERABLE_FIELDS } from '../constants/config'

export const filterPopulation = (list, filter, fields = FILTERABLE_FIELDS) => list.filter(person => {
  filter = filter.toLowerCase()

  for (let i = 0; i < fields.length; i++) {
    const value = person[fields[i]]

    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        if (value[j].toLowerCase().includes(filter)) {
          return true
        }
      }
    } else if (value.toLowerCase().includes(filter)) {
      return true
    }
  }

  return false
})
