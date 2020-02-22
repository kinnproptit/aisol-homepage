import { combineReducers } from 'redux'

import homeReducer from './home'
import audioReducer from './audio'

export default combineReducers({ homeReducer, audioReducer })
