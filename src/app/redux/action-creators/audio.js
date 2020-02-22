import * as Actions from '../action-types'

export const updateAudio = payload => {
  return dispatch =>
    dispatch({
      type: Actions.PLAY_AUDIO,
      payload
    })
}

export const updateText = payload => {
  return dispatch =>
    dispatch({
      type: Actions.GET_TEXT,
      payload
    })
}
