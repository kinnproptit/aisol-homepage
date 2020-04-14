import { combineReducers } from 'redux'

import homeReducer from './home'
import recognitionReducer from './recognition'
import ttsReducer from './audio'
import bookReducer from './book'

export default combineReducers({
  homeReducer,
  recognitionReducer,
  ttsReducer,
  bookReducer
})
