import React, { createContext, useEffect } from 'react'
import axios from 'axios'

import { LoadingIndicator } from '../packages/ui'
import { useState } from '../packages/core'
// import environments from 'environments'

export const PreloaderContext = createContext()

export const Preloader = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    isActiveLink: [1, 0, 0, 0, 0],
    mp3data: []
  })

  useEffect(() => {
    const fetchData = async () => {
      // const data = await axios('https://aisol.vn/tts/api/v1/voices', {token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55'})
      // console.log(data)
      const response = {
        msg: 'Success!',
        status: 0,
        version: '1.0',
        voices: [
          {
            id: 2,
            name: 'Nữ - Miền Bắc id 2'
          },
          {
            id: 3,
            name: 'Nữ - Miền Bắc id 3'
          },
          {
            id: 4,
            name: 'Nữ - Miền Bắc id 4'
          }
        ]
      }
      setState({ loading: false, mp3data: response.voices })
    }
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  console.log(state.data)

  const props = {
    ...state
  }

  return (
    <PreloaderContext.Provider value={props}>
      {children}
    </PreloaderContext.Provider>
  )
}
