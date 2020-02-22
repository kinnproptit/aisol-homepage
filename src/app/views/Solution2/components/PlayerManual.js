import React, { useState, useEffect } from 'react'

const useAudio = url => {
  const [audio, setAudio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  const onChangeSrc = () => {
    audio.pause()
    audio.currentTime = 0
    setAudio(new Audio(url))
    console.log(audio)
    audio.load()
    audio.play()
  }

  useEffect(() => {
    //   playing ? audio.play() : audio.pause();
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle, onChangeSrc]
}

export const Player = ({ url, onFetchAudio }) => {
  const [playing, toggle, onChangeSrc] = useAudio(url)

  return (
    <div>
      <button
        onClick={() => {
          toggle()
          onFetchAudio()
          onChangeSrc()
        }}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}
