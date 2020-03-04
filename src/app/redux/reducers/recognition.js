import * as Actions from '../action-types'

const initialState = {
  ws: '',
  audioData: ''
}

const recognitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_SOCKET:
      return {
        ...state,
        ws: action.payload
      }
    case Actions.SEND_DATA:
      return {
        ...state,
        audioData: action.payload
      }
    default:
      return state
  }
}

export default recognitionReducer
