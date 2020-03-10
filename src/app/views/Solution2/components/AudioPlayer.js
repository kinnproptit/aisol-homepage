import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'qs'
import axios from 'axios'
import { Slider } from 'antd'

import * as Actions from '../../../redux/action-creators/audio'

import enviroments from '../../../../environments'

import PlayIcon from '../../../assets/play.svg'
import StopIcon from '../../../assets/stop.svg'
import ResumeIcon from '../../../assets/pause.svg'
import LoadingIcon from '../../../assets/loading.svg'

const SliderAudio = ({ setResumePos }) => {

  const position = useSelector(state => state.ttsReducer.audioPosition)
  const duration = useSelector(state => state.ttsReducer.duration)

  // console.log(duration)

  return (
    <Slider
      value={position}
      min={0}
      max={duration}
      onChange={value => setResumePos(value)}
    />
  )
}

export const AudioPlayer = ({ state }) => {
  let dispatch = useDispatch()

  const [playing, setPlaying] = useState(false)
  const [onFetch, setOnFetch] = useState(true)
  const [resumePos, setResumePos] = useState(0)
  const [loading, setLoading] = useState(false)

  const text = useSelector(state => state.ttsReducer.text)
  const playStatus = useSelector(state => state.ttsReducer.playStatus)
  const audioUrl = useSelector(state => state.ttsReducer.audioUrl)

  console.log(text + ' ' + playStatus + ' ' + audioUrl)

  const fetchData = async () => {
    setLoading(true)
    const { voiceId, token } = state
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        text,
        voiceId,
        token
      }),
      url: enviroments.apiPostTTS
    }
    const audio = await axios(options)
    if (audio.data.status === 0) {
      // console.log(audio.data.data.url)
      dispatch(Actions.updateAudio(audio.data.data.url))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onFetchPlayButton = async () => {
    // if (text === '') {
    //   alert('Vui lòng nhập nội dung')
    // } else {
    //   setPlaying(!playing)
    //   await fetchData()
    //   setPlayStatus(Sound.status.PLAYING)
    // }
    setPlaying(!playing)
    await fetchData()
    dispatch(Actions.updatePlayStatus(Sound.status.PLAYING))
  }

  const onClickPlayButton = () => {
    setPlaying(true)
    dispatch(Actions.updatePlayStatus(Sound.status.PLAYING))
  }

  const onClickPausedButton = () => {
    setPlaying(false)
    setOnFetch(false)
    dispatch(Actions.updatePlayStatus(Sound.status.PAUSED))
  }

  return (
    <>
      <Sound
        url={audioUrl}
        playFromPosition={resumePos}
        playStatus={playStatus}
        onLoad={sound => {
          dispatch(Actions.updateDuration(sound.duration))
        }}
        onPlaying={sound => {
          // console.log("sound playing: " + sound.position)
          sound.position !== 0 && dispatch(Actions.updateAudioPosition(sound.position))
        }}
        onPause={sound => {
          // console.log("pased: "+ sound.position)
          setResumePos(sound.position)
          // dispatch(Actions.updateAudioPosition(sound.position))
        }}
        onResume={sound => {
          // console.log(sound.position)
          setResumePos(sound.position)
          dispatch(Actions.updateAudioPosition(sound.position))
        }}
        onFinishedPlaying={() => {
          setPlaying(false)
          setOnFetch(true)
          dispatch(Actions.updatePlayStatus(Sound.status.STOPPED))
          setResumePos(0)
        }}
      />
      <MediaPlayer>
        {!playing ? (
          onFetch ? (
            <Img src={PlayIcon} onClick={onFetchPlayButton} />
          ) : (
            <Img src={PlayIcon} onClick={onClickPlayButton} />
          )
        ) : (
          <Img src={ResumeIcon} onClick={onClickPausedButton} />
        )}
        <StyledStop
          playing={!playing && onFetch}
          src={StopIcon}
          onClick={() => {
            setPlaying(false)
            setOnFetch(true)
            setResumePos(0)
            dispatch(Actions.updateAudioPosition(0))
            dispatch(Actions.updatePlayStatus(Sound.status.STOPPED))
          }}
        />
        <SliderAudio setResumePos={setResumePos} />
      </MediaPlayer>
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
