import React, { useContext } from 'react'

import { useState } from '../../../../packages/core'
import { PreloaderContext } from '../../../Preloader'
import { SpeechSynthesis } from './SpeechSynthesis'

export const SpeechSynthesisContainer = () => {
  const { mp3data } = useContext(PreloaderContext)

  const initialStates = {
    voiceId: mp3data[0].id || null,
    text: 'Chưa có nội dung'
  }

  const [state, setState] = useState(initialStates)

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
    onChangeVoice
  }
  return <SpeechSynthesis {...props} />
}
