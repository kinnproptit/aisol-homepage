import * as Actions from '../action-types'

const initialState = {
  ws: null,
  audioData: null,
  connectedWs: null,
  text: null
}

const recognitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_SOCKET:
      return {
        ...state,
        ws: action.payload
      }
    case Actions.GET_AUDIO:
      return {
        ...state,
        audioData: action.payload
      }
    case Actions.GET_CONNECTED_WS:
      return {
        ...state,
        connectedWs: action.payload
      }
    case Actions.GET_TEXT:
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}

export default recognitionReducer
