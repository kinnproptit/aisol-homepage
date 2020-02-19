import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'

export const HeaderContainer = () => {
  const prevScrollY = useRef()

  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false)
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true)
      }

      prevScrollY.current = currentScrollY
      console.log(goingUp, currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [goingUp])

  return <Header />
}
