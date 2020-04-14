import * as Actions from '../action-types'

export const updateAudioBook = payload => {
  return dispatch =>
    dispatch({
      type: Actions.BOOK_AUDIO,
      payload
    })
}

export const updatePageBook = payload => {
  return dispatch =>
    dispatch({
      type: Actions.BOOK_INPUT,
      payload
    })
}

export const updatePlayStatus = payload => {
  return dispatch =>
    dispatch({
      type: Actions.BOOK_AUDIO_STATUS,
      payload
    })
}

export const updateZoom = payload => {
  return dispatch =>
    dispatch({
      type: Actions.BOOK_ZOOM,
      payload
    })
}

export const updateAudioPosition = payload => {
  return dispatch =>
    dispatch({
      type: Actions.BOOK_AUDIO_POSITION,
      payload
    })
}
