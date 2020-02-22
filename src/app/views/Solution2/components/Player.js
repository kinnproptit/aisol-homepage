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

const Player = ({ url, fetchData }) => {
  const [playing, toggle] = useAudio(url)
  console.log(url)
  return (
    <div
      onClick={() => {
        toggle()
        fetchData()
      }}
    >
      {playing ? (
        <Icon src={StopIcon} />
      ) : (
        <Icon src={PlayIcon} onClick={toggle} />
      )}
    </div>
  )
}

const Icon = styled.img`
  cursor: pointer;
`

export default Player
