import React, { createContext, useEffect } from 'react'
import { LoadingIndicator } from '../packages/ui'
import { useState } from '../packages/core'
// import environments from 'environments'

export const PreloaderContext = createContext()

export const Preloader = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    isActiveLink: [1, 0, 0, 0, 0]
  })

  useEffect(() => {
    const fetchData = async () => {
      // const sessions = await axios(`${environments.baseUrl}sessions`)
      // const parts = await axios(`${environments.baseUrl}parts`)
      setState({ loading: false })
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
