import * as Actions from '../action-types'

export const updateAudio = payload => {
  return dispatch =>
    dispatch({
      type: Actions.AUDIO_URL,
      payload
    })
}

export const updateText = payload => {
  return dispatch =>
    dispatch({
      type: Actions.TTS_TEXT,
      payload
    })
}

export const updatePlayStatus = payload => {
  return dispatch =>
    dispatch({
      type: Actions.TTS_PLAY_STATUS,
      payload
    })
}

export const updateAudioPosition = payload => {
  return dispatch =>
    dispatch({
      type: Actions.TTS_POSITION,
      payload
    })
}

export const updateResumePosition = payload => {
  return dispatch =>
    dispatch({
      type: Actions.TTS_RESUME_POSITION,
      payload
    })
}

export const updateDuration = payload => {
  return dispatch =>
    dispatch({
      type: Actions.TTS_DURATION,
      payload
    })
}
