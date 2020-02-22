import React, {
  useContext,
  useEffect,
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
    text: '',
    token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55',
    audioUrl: 'http://103.74.122.136:8086/data/end2end_ngocmiu/20200222181755-47007795.mp3'
  }

  const [state, setState] = useState(initialStates)

  // useEffect(() => {
  //   fetchData()
  // }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const onChangeAudio = audioUrl => {
    setState({ audioUrl })
  }

  const onChangeVoice = voiceId => {
    setState({ voiceId })
  }

  const onChangeText = value => {
    setState({ text: value })
  }

  const props = {
    mp3data,
    state,
    setState,
    onChangeVoice,
    onChangeText,
    onChangeAudio
  }
  return (
    <SpeechContext.Provider value={props}>
      <SpeechSynthesis {...props} />
    </SpeechContext.Provider>
  )
}
