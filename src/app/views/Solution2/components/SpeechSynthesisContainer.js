import React, { useContext, useEffect } from 'react'
import axios from 'axios'

import { useState } from '../../../../packages/core'

import { LoadingIndicator } from '../../../../packages/ui'
import { PreloaderContext } from '../../../Preloader'

import { SpeechSynthesis } from './SpeechSynthesis'

export const SpeechSynthesisContainer = () => {
  const { mp3data } = useContext(PreloaderContext)

  const initialStates = {
    loading: true,
    voiceId: mp3data[0].id,
    text: '',
    token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55',
    audioUrl: ''
  }

  const [state, setState] = useState(initialStates)

  const { voiceId, token, text } = state

  useEffect(() => {
    const fetchData = async () => {
      //   const audio = await axios.post('http://aisol.vn/tts/api/v1/path',{
      //       voiceId,
      //       text,
      //       token
      //   })

      const audio = {
        data: {
          url:
            'http://103.74.122.136:8086/data/end2end_ngocmiu/20200222012015-f58f5f54.mp3'
        },
        msg: 'Success!',
        stats: {
          num_words: 3,
          time: 0.5727672576904297,
          words_per_second: 5.237683781215386
        },
        status: 0
      }

      setState({
        loading: false,
        audioUrl: audio.data.url
      })
    }
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const onChangeVoice = voiceId => {
    setState({ voiceId })
  }

  const onChangeText = event => {
    setState({ text: event.target.value })
  }
  console.log(state)

  const props = {
    mp3data,
    state,
    setState,
    onChangeVoice,
    onChangeText
  }
  return <SpeechSynthesis {...props} />
}
