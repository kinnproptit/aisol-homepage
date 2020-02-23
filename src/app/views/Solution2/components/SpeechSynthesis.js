import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import Sound from 'react-sound'
import axios from 'axios'
import qs from 'qs'

import * as Actions from '../../../redux/action-creators/audio'
import DownloadIcon from '../../../assets/download.svg'

import Button from '../../../Shared/components/Button/Button'
import { DropdownMenuVoice } from '../../../Shared/components/Dropdown/DropdownMenuVoice'

import { TextEditor } from './TextEditor'

export const SpeechSynthesis = ({ mp3data, onChangeVoice, state }) => {
  const dispatch = useDispatch()
  const audioRedux = useSelector(state => state.audioReducer)

  const [audioUrl, setAudio] = useState('')
  const [playStatus, setPlayStatus] = useState(Sound.status.PLAYING)
  const [position, setPosition] = useState(0)
  const [soundComp, setSoundComp] = useState(null)
  const [text, setText] = useState('')
  const [playing, setPlaying] = useState(false)
  const [onFetch, setOnFetch] = useState(true)

  const fetchData = async () => {
    const { voiceId, token } = state
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
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onFetchPlayButton = () => {
    if (text === '') {
      alert('Vui lòng nhập nội dung')
    } else {
      // setTimeout(() => {
        setPlaying(!playing)
        fetchData()
        setPlayStatus(Sound.status.PLAYING)
      // }, 1000)
    }
  }

  const onClickPlayButton = () => {
    setPlaying(true)
    setPlayStatus(Sound.status.PLAYING)
  }

  const onClickPausedButton = () => {
    setPlaying(false)
    setOnFetch(false)
    setPlayStatus(Sound.status.PAUSED)
  }

  const onChangeText = event => {
    setText(event.target.value)
    setAudio('')
  }

  return (
    <section>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          Trải nghiệm
        </h1>
        <Wrapper>
          <FlexContent className='container'>
            <Paper>
              <PaperContent>
                <TextEditor onChangeText={onChangeText} />
              </PaperContent>
            </Paper>
            <PlayerContainer>
              <p>Giọng đọc</p>
              <Dropdown1 data={mp3data} onClick={onChangeVoice} />
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
                  onClick={() => {
                    setPlaying(false)
                    setOnFetch(true)
                    setPlayStatus(Sound.status.PAUSED)
                  }}
                >
                  Stop
                </button>

                {!playing ? (
                  onFetch ? (
                    <button onClick={onFetchPlayButton}>Play</button>
                  ) : (
                    <button onClick={onClickPlayButton}>Play 2</button>
                  )
                ) : (
                  <button onClick={onClickPausedButton}>Paused</button>
                )}
              </div>
              <div>
                <StyledButton
                  text='Tải xuống'
                  icon={DownloadIcon}
                  className='btn--red'
                  isMarginLeft={false}
                />
              </div>
            </PlayerContainer>
          </FlexContent>
        </Wrapper>
      </div>
    </section>
  )
}

const Wrapper = styled.div`
  font-family: 'Muli', san-serif;
`

const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`

const PlayerContainer = styled.div`
  width: 40%;
`

const Paper = styled.div`
  width: 58%;
  position: relative;
  border-radius: 13px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.16);
  background: white;
`
const PaperContent = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  bottom: 0.5rem;
  left: 1.5rem;
  background: linear-gradient(transparent, transparent 29px, gray 29px);
  background-size: 30px 30px;
  opacity: 0.3;
`

const StyledButton = styled(Button)`
  justify-content: center;
  display: flex;
  width: 100%;
`

const StyledDropdown = styled(DropdownMenuVoice)`
  padding: 1rem 4rem;
  border-radius: 0.8rem;
  font-size: 18px;
  font-family: 'Muli', sans-serif;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  background: #b9ccc6;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Dropdown1 = styled(StyledDropdown)`
  margin-bottom: 1em;
`

const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`
