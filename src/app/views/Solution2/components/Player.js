import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'

import ReactAudioPlayer from 'react-audio-player'

export const Player = ({ url, onFetchAudio }) => {
  return (
    <>
      {/* <AudioPlayer
        src={url}
        // other props here
      /> */}
      <ReactAudioPlayer src={url} controls onPlay={onFetchAudio} />
    </>
  )
}
