import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PlayIcon from '../../../assets/play.svg'
import StopIcon from '../../../assets/stop.svg'

const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return playing ? (
    <Icon onClick={toggle} src={StopIcon} />
  ) : (
    <Icon src={PlayIcon} onClick={toggle} />
  )
}

const Icon = styled.img`
  cursor: pointer;
`

export default Player
