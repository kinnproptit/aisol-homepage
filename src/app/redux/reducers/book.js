import * as Actions from '../action-types'

const initialState = {
  page: 1,
  playStatus: 'PLAYING',
  audio: null,
  allPages: 10,
  zoom: 654,
  audioPosition: 0,
  resumePosition: 0
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.BOOK_INPUT:
      return {
        ...state,
        page: action.payload
      }
    case Actions.BOOK_AUDIO:
      return {
        ...state,
        audio: action.payload
      }
    case Actions.BOOK_AUDIO_STATUS:
      return {
        ...state,
        playStatus: action.payload
      }
    case Actions.BOOK_ZOOM:
      return {
        ...state,
        zoom: action.payload
      }
    case Actions.BOOK_AUDIO_POSITION:
      return {
        ...state,
        audioPosition: action.payload
      }
    case Actions.BOOK_AUDIO_REPOS:
      return {
        ...state,
        resumePosition: action.payload
      }
    default:
      return state
  }
}

export default bookReducer
