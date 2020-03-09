import { combineReducers } from 'redux'

import homeReducer from './home'
import recognitionReducer from './recognition'
import ttsReducer from './audio'

export default combineReducers({ homeReducer, recognitionReducer, ttsReducer })
