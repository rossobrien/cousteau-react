import * as ActionTypes from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    name: 'Query',
    query: 'SELECT * FROM queries',
    liked: false,
    likes: 2,
    runs: 3
  },
  {
    id: 2,
    name: 'Query 2',
    query: 'SELECT * FROM queries',
    liked: false,
    likes: 4,
    runs: 1
  },
    {
    id: 3,
    name: 'Query 3',
    query: 'SELECT * FROM queries',
    liked: false,
    likes: 1,
    runs: 4
  },
    {
    id: 4,
    name: 'Query 4',
    query: 'SELECT * FROM queries',
    liked: false,
    likes: 3,
    runs: 2
  },
]

export default function queries(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_QUERY:
      return [
        {
          id: state.reduce((maxId, query) => Math.max(query.id, maxId), -1) + 1,
          name: action.name,
          query: action.query,
          liked: false,
          likes: 0,
          runs: 0
        },
        ...state
      ]

    case ActionTypes.EDIT_QUERY:
      return state.map(query =>
        query.id === action.query.id ? action.query : query
      )

    case ActionTypes.LIKE_QUERY:
      return state.map(query =>
        query.id === action.id ?
          { ...query, liked: true, likes: query.likes+1 } :
          query
      )

    case ActionTypes.RUN_QUERY:
      return state.map(query =>
        query.id === action.id ?
          { ...query, runs: query.runs+1 } :
          query
      )

    default:
      return state
  }
}
