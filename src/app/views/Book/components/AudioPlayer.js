import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

export const AudioPlayer = ({ audio: audioUrl, playAll }) => {
  let dispatch = useDispatch()

  const [playing, setPlaying] = useState(false)

  const playStatus = useSelector(state => state.bookReducer.playStatus)
  const audioPosition = useSelector(state => state.bookReducer.audioPosition)
  const page = useSelector(state => state.bookReducer.page)

  return (
    <>
      <Sound
        url={audioUrl}
        playFromPosition={audioPosition}
        playStatus={playStatus}
        onPause={sound => {
          dispatch(Actions.updateAudioPosition(sound.position))
        }}
        onResume={sound => {
          dispatch(Actions.updateAudioPosition(sound.position))
        }}
        onFinishedPlaying={() => {
          setPlaying(false)
          // dispatch(Actions.updatePlayStatus(Sound.status.STOPPED))
          dispatch(Actions.updateAudioPosition(0))
          playAll && dispatch(Actions.updatePageBook(page + 1))
        }}
      />
    </>
  )
}

const Img = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
`

const StyledStop = styled(Img)`
  opacity: ${props => (props.playing ? '0.5' : '1')};
`

const MediaPlayer = styled.div`
  background-color: #227ca2;
  padding: 0.6rem 4rem;
  display: grid;
  grid-template-columns: 24px 24px auto;
  grid-gap: 16px;
  align-items: center;
  border-radius: 0.8rem;
`
