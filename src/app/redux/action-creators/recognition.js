import * as Actions from '../action-types'

export const updateAudioData = payload => {
  return dispatch =>
    dispatch({
      type: Actions.GET_AUDIO,
      payload
    })
}

export const updateSocket = payload => {
  return dispatch =>
    dispatch({
      type: Actions.GET_SOCKET,
      payload
    })
}