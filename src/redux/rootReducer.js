//리두서

import { combineReducers } from 'redux'
import todoReducer from './todos/Reducer'

const rootReducer= combineReducers({
    as:todoReducer,
})
export default rootReducer