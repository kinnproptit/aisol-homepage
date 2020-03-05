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

export const updateConnectedWS = payload => {
  return dispatch =>
    dispatch({
      type: Actions.GET_CONNECTED_WS,
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

export const switchButton = payload => {
  return dispatch => 
    dispatch({
      type: Actions.SWITCH_BUTTON,
      payload
    })
}