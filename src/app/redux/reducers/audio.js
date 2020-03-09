import * as Actions from '../action-types'

const initialState = {
  audioUrl: null,
  text: 'Bạn hãy nhập nội dung để trải nghiệm thử giọng đọc của mình nhé',
  playStatus: 'STOPPED',
  audioPosition: 0,
  resumePosition: 0,
  duration: 100
}

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.AUDIO_URL:
      return {
        ...state,
        audioUrl: action.payload
      }
    case Actions.TTS_TEXT:
      return {
        ...state,
        text: action.payload
      }
    case Actions.TTS_PLAY_STATUS:
      return {
        ...state,
        playStatus: action.payload
      }
    case Actions.TTS_POSITION:
      return {
        ...state,
        audioPosition: action.payload
      }
    case Actions.TTS_RESUME_POSITION:
      return {
        ...state,
        resumePosition: action.payload
      }
    case Actions.TTS_DURATION:
      return {
        ...state,
        duration: action.payload
      }
    default:
      return state
  }
}

export default audioReducer
