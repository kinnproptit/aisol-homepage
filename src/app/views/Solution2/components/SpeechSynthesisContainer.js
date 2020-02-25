import React, { useContext, useEffect, useState as defaultState } from 'react'
import axios from 'axios'
import qs from 'qs'

import { useState } from '../../../../packages/core'

import { LoadingIndicator } from '../../../../packages/ui'
import { PreloaderContext } from '../../../Preloader'

import { SpeechSynthesis } from './SpeechSynthesis'

export const SpeechSynthesisContainer = () => {
  const { mp3data } = useContext(PreloaderContext)

  const initialStates = {
    loading: true,
    voiceId: mp3data[0].id || null,
    text: 'Chưa có nội dung',
    token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55'
  }

  const [state, setState] = useState(initialStates)

  const fetchData = async () => {
    const { voiceId, token, text } = state
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        text,
        voiceId,
        token
      }),
      url: 'http://103.74.122.136:8086/api/v1/path'
    }
    const audio = await axios(options)

    setState({
      loading: false,
      audioUrl: audio.data.data.url
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
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
    fetchData
  }
  return <SpeechSynthesis {...props} />
}
