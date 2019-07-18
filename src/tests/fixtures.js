import { DEFAULT_PAGE_SIZE, TOWN_NAME } from '../constants/config'

export const stubFunc = ()=> {}

export const populationInitialState = {
  originalList: null,
  list: null,
  isLoading: false,
  errorMessage: null,
  currentPage: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  filter: null
}

export const personInitialState = {
  data: null
}

export const populationList = [
  {
    'id': 100,
    'name': 'Libalia Bitterrocket',
    'thumbnail': 'http://www.publicdomainpictures.net/pictures/20000/nahled/sunset-in-winter.jpg',
    'age': 377,
    'weight': 39.88454,
    'height': 122.41089,
    'hair_color': 'Black',
    'professions': [
      'Sculptor',
      'Tailor'
    ],
    'friends': [
      'Malbert Wrongrocket',
      'Whitwright Fusstorque',
      'Modwell Nozzletink',
      'Malbin Gimbalslicer'
    ]
  },
  {
    'id': 200,
    'name': 'Fizwood Felpower',
    'thumbnail': 'http://www.publicdomainpictures.net/pictures/10000/velka/chilli.jpg',
    'age': 252,
    'weight': 36.699184,
    'height': 122.13773,
    'hair_color': 'Red',
    'professions': [
      'Carpenter'
    ],
    'friends': [
      'Ecki Fusslauncher',
      'Midwig Wrongbuster',
      'Libalia Switchrivet'
    ]
  },
  {
    'id': 300,
    'name': 'Libalia Voidwidget',
    'thumbnail': 'http://www.publicdomainpictures.net/pictures/20000/velka/cat-with-green-eyes-871298226869aN0.jpg',
    'age': 137,
    'weight': 39.134216,
    'height': 121.221466,
    'hair_color': 'Green',
    'professions': [
      'Tax inspector',
      'Baker',
      'Mason',
      'Leatherworker',
      'Farmer'
    ],
    'friends': [
      'Minabonk Tinkpiston',
      'Ecki Bittertossle'
    ]
  }
]

export const dataFromAPI = {
  [TOWN_NAME]: populationList
}