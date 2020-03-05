import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import qs from 'qs'
import axios from 'axios'

import { Slider } from 'antd'

import enviroments from '../../../../environments'

import DownloadIcon from '../../../assets/download.svg'
import PlayIcon from '../../../assets/play.svg'
import StopIcon from '../../../assets/stop.svg'
import ResumeIcon from '../../../assets/pause.svg'

import Button from '../../../Shared/components/Button/Button'
import { DropdownMenuVoice } from '../../../Shared/components/Dropdown/DropdownMenuVoice'

export const SpeechSynthesis = ({ mp3data, onChangeVoice, state }) => {
  const [audioUrl, setAudio] = useState('')
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED)
  const [position, setPosition] = useState(0)
  const [soundComp, setSoundComp] = useState(null)
  const [text, setText] = useState(
    'Bạn hãy nhập nội dung để trải nghiệm thử giọng đọc của mình nhé'
  )
  const [playing, setPlaying] = useState(false)
  const [onFetch, setOnFetch] = useState(true)
  const [duration, setDuration] = useState(null)
  const [blobUrl, setBlobUrl] = useState(null)

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
      url: enviroments.apiPostTTS
    }
    const audio = await axios(options)
    if (audio.data.status === 0) {
      setAudio(audio.data.data.url)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const downloadFile = (filename, url) => {
    fetch(url).then(t => {
      return t.blob().then(b => {
        var a = document.createElement('a')
        a.href = URL.createObjectURL(b)
        a.setAttribute('download', filename)
        a.click()
      })
    })
  }

  const onFetchPlayButton = async () => {
    // if (text === '') {
    //   alert('Vui lòng nhập nội dung')
    // } else {
    //   setPlaying(!playing)
    //   await fetchData()
    //   setPlayStatus(Sound.status.PLAYING)
    // }
    setPlaying(!playing)
    // setPlaying(true)
    await fetchData()
    setPlayStatus(Sound.status.PLAYING)
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
    setPlayStatus(Sound.status.STOPPED)
    setText(event.target.value)
    // setAudio('')
  }

  let location = useLocation()

  useEffect(() => {
    if (location.state && location.state.scroll) {
      document.getElementById('tts-demo').scrollIntoView()
    }
  }, [])

  return (
    <section id='tts-demo'>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          Trải nghiệm
        </h1>
        <Wrapper>
          <FlexContent className='container'>
            <Paper>
              <PaperContent>
                <Textarea onChange={onChangeText}>
                  Bạn hãy nhập nội dung để trải nghiệm thử giọng đọc của mình
                  nhé
                </Textarea>
              </PaperContent>
            </Paper>
            <PlayerContainer className='row'>
              <CenterDiv className='col-lg-4 d-block-mobile top_ma'>
                <P>Giọng đọc</P>
                <Dropdown1 data={mp3data} onClick={onChangeVoice} />
              </CenterDiv>
              <div className='col-lg-4 top_ma'>
                <Sound
                  url={audioUrl}
                  playFromPosition={position}
                  playStatus={playStatus}
                  onLoad={sound => {
                    setSoundComp(sound)
                  }}
                  onPlaying={sound => {
                    setPosition(sound.position)
                  }}
                  onLoading={sound => setDuration(sound.duration)}
                  onFinishedPlaying={() => {
                    setPlaying(false)
                    setOnFetch(true)
                    setPlayStatus(Sound.status.STOPPED)
                    setPosition(0)
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
                      setPosition(0)
                      setPlayStatus(Sound.status.PAUSED)
                    }}
                  />
                  <Slider
                    value={position}
                    min={0}
                    max={(duration && duration) || 100}
                    onChange={value => setPosition(value)}
                  />
                </MediaPlayer>
              </div>
              <div className='col-lg-4 top_ma'>
                <StyledButton
                  // to={audioUrl}
                  text='Tải xuống'
                  icon={DownloadIcon}
                  className='btn--red'
                  isMarginLeft={false}
                  buttonCustom='button_red'
                  textCustom='text_red'
                  className=' btn--red red'
                  onClick={() => downloadFile('aisol-vn-tts.mp3', audioUrl)}
                />
              </div>
            </PlayerContainer>
          </FlexContent>
        </Wrapper>
      </div>
    </section>
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

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`

const P = styled.p`
  margin: 0;
  margin-right: 1rem;
`

const Wrapper = styled.div`
  font-family: 'Muli', san-serif;
`

const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1em;
`

const PlayerContainer = styled.div`
  margin: 1rem;
  align-items: center;
`

const Paper = styled.div`
  height: 22rem;
  width: 100%;
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

const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  line-height: 30px;
  padding: 0 5px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  z-index: 1;
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
  width: 86%;
`
