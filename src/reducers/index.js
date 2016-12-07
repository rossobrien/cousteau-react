import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import queries from './queries'

const rootReducer = combineReducers({
  queries,
  routing
})

export default rootReducer
