import React, {
  useContext,
  useState as defaultState,
  createContext
} from 'react'

import { useState } from '../../../../packages/core'

import { LoadingIndicator } from '../../../../packages/ui'
import { PreloaderContext } from '../../../Preloader'

import { SpeechSynthesis } from './SpeechSynthesis'

export const SpeechContext = createContext()

export const SpeechSynthesisContainer = () => {
  const { mp3data } = useContext(PreloaderContext)

  const initialStates = {
    loading: false,
    voiceId: mp3data[0].id || null,
    token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55',
    text: ''
  }

  const [state, setState] = useState(initialStates)
  const [audio, setAudio] = defaultState('')

  if (state.loading) {
    return <LoadingIndicator />
  }


  const onChangeVoice = voiceId => {
    setState({ voiceId })
  }

  const onChangeText = e => {
    setState({ text: e.target.value })
  }

  const props = {
    mp3data,
    state,
    setState,
    onChangeVoice,
    onChangeText,
    audio,
    setAudio
  }
  return (
    <SpeechContext.Provider value={props}>
      <SpeechSynthesis {...props} />
    </SpeechContext.Provider>
  )
}
