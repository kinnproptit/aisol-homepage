import { combineReducers } from 'redux'

import homeReducer from './home'
import recognitionReducer from './recognition'

export default combineReducers({ homeReducer, recognitionReducer })
