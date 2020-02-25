import React, { createContext, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import { LoadingIndicator } from '../packages/ui'
import { useState } from '../packages/core'

export const PreloaderContext = createContext()

export const Preloader = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    isActive: [1, 0, 0, 0],
    mp3data: []
  })

  let { pathname } = ''

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://103.74.122.136:8086/api/v1/voices', {
        token: 'McTUDABy8FZYbKwC00OTIweLZwYWgy55'
      })
      setState({ loading: false, mp3data: response.data.voices })
    }
    fetchData()
    switch (pathname) {
      case '/solution1.html':
        setState({ isActive: [0, 1, 0, 0] })
        break
      case '/solution2.html':
        setState({ isActive: [0, 1, 0, 0] })
        break
      case '/product.html':
        setState({ isActive: [0, 0, 1, 0] })
        break
      case '/contact.html':
        setState({ isActive: [0, 0, 0, 1] })
        break
      default:
        setState({ isActive: [1, 0, 0, 0] })
    }
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
