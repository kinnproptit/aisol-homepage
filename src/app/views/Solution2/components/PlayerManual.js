import React, { useState, useEffect } from 'react'

import ReactPlayer from 'react-player'
import Sound from 'react-sound'
import axios from 'axios'
import qs from 'qs'

// const useAudio = url => {
//   const [audio, setAudio] = useState(new Audio(url))
//   const [playing, setPlaying] = useState(false)

//   const toggle = () => setPlaying(!playing)

//   const onChangeSrc = () => {
//     audio.pause()
//     audio.currentTime = 0
//     setAudio(new Audio(url))
//     console.log(audio)
//     audio.load()
//     audio.play()
//   }

//   useEffect(() => {
//     //   playing ? audio.play() : audio.pause();
//   }, [playing])

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false))
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false))
//     }
//   }, [])

//   return [playing, toggle, onChangeSrc]
// }

// export const Player = ({ url, onFetchAudio }) => {
//   const [playing, toggle, onChangeSrc] = useAudio(url)

//   return (
//     <div>
//       <button
//         onClick={() => {
//           toggle()
//           onFetchAudio()
//           onChangeSrc()
//         }}
//       >
//         {playing ? 'Pause' : 'Play'}
//       </button>
//     </div>
//   )
// }

export const Player = ({ token, voiceId, text }) => {
  const [audioUrl, setAudio] = useState('')
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED)
  const [position, setPosition] = useState(0)
  const [soundComp, setSoundComp] = useState(null)

  const fetchData = async () => {
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
    if (audio.data.status === 0) {
      setAudio(audio.data.data.url)
      // dispatch(Actions.updateAudio({ audioUrl: audio.data.data.url }))
      // onChangeAudio(audio.data.data.url)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onClickPlayButton = () => {
    if (text === '') {
      alert('Vui lòng nhập nội dung')
    } else {
      // setAudio(audio)
      fetchData()
      setPlayStatus(Sound.status.PLAYING)
    }
  }

  return (
    <div>
      <Sound
        url={audioUrl}
        playStatus={playStatus}
        onLoad={sound => {
          setSoundComp(sound)
        }}
        onPlaying={sound => {
          setPosition(sound.position)
        }}
        autoLoad={false}
        muted='muted'
      />
      <button
        onClick={evt => {
          setPlayStatus(Sound.status.PAUSED)
        }}
      >
        Pause
      </button>
      <button onClick={onClickPlayButton}>Play</button>
    </div>
  )
}
