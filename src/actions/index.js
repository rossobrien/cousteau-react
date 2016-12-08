import * as ActionTypes from '../constants/ActionTypes'

export const addQuery = (name, query) => ({ type: ActionTypes.ADD_QUERY, query })
export const editQuery = (id, query) => ({ type: ActionTypes.EDIT_QUERY, id, query })
export const likeQuery = id => ({ type: ActionTypes.LIKE_QUERY, id })
export const runQuery = id => ({ type: ActionTypes.RUN_QUERY, id })
