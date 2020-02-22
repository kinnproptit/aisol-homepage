import * as Actions from '../action-types'

const initialState = {
  audioUrl: 'http://103.74.122.136:8086/data/end2end_ngocmiu/20200222122255-346cc135.mp3',
  text: null
}

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PLAY_AUDIO:
      return {
        ...state,
        audioUrl: action.payload.audioUrl
      }
    case Actions.GET_TEXT:
        return {
            ...state,
            text: action.playload.text
        }
    default:
      return state
  }
}

export default audioReducer