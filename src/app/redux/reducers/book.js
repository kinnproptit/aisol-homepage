import * as Actions from '../action-types'

const initialState = {
  page: 1,
  playStatus: 'PLAYING',
  playing: true,
  audio: null,
  allPages: 10,
  zoom: 654,
  audioPosition: 0,
  resumePosition: 0,
  menuVisible: true
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.BOOK_INPUT:
      return {
        ...state,
        playStatus: 'PLAYING',
        playing: true,
        page: action.payload,
        menuVisible: false,
        audioPosition: 0
      }
    case Actions.BOOK_AUDIO:
      return {
        ...state,

        audio: action.payload
      }
    case Actions.BOOK_AUDIO_STATUS:
      return {
        ...state,
        playStatus: action.payload,
        playing: !state.playing
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
    case Actions.BOOK_PLAYING:
      return {
        ...state,
        playing: action.payload
      }
    case Actions.BOOK_MENU:
      return {
        ...state,
        menuVisible: action.payload
      }
    default:
      return state
  }
}

export default bookReducer
