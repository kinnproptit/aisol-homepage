import * as Actions from '../action-types'

const initialState = {
  page: 1,
  playStatus: 'STOPPED',
  playing: false,
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
      let result = 0
      let playStatus = 'PLAYING'
      let playing = true
      if (action.payload > state.allPages) {
        result = state.allPages
        playStatus = 'STOPPED'
        playing = false
      } else {
        result = action.payload
      }
      return {
        ...state,
        playStatus,
        playing,
        page: result,
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
