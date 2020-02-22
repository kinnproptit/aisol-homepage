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
      const response = await axios('http://103.74.122.136:8086/api/v1/voices', {token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55'})
      setState({ loading: false, mp3data: response.data.voices })
    }
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const props = {
    ...state
  }

  return (
    <PreloaderContext.Provider value={props}>
      {children}
    </PreloaderContext.Provider>
  )
}
