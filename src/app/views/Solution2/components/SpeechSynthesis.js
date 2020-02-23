import React from 'react'
import styled from 'styled-components'

import DownloadIcon from '../../../assets/download.svg'
import PlayIcon from '../../../assets/play.svg'
import StopIcon from '../../../assets/stop.svg'

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

  console.log(Sound.duration)

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
                <Textarea onChange={e => onChangeText(e.target.value)}>
                  Nội dung trải nghiệm
                </Textarea>
              </PaperContent>
            </Paper>
            <PlayerContainer className='row'>
              <CenterDiv className='col-md-5'>
                <P>Giọng đọc</P>
                <Dropdown1 data={mp3data} onClick={onChangeVoice} />
              </CenterDiv>
              <div className='col-md-4'>
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
                <MediaPlayer>
                  {!playing ? (
                    onFetch ? (
                      <img src={PlayIcon} onClick={onFetchPlayButton} />
                    ) : (
                      <img src={PlayIcon} onClick={onClickPlayButton} />
                    )
                  ) : (
                    <img src={StopIcon} onClick={onClickPausedButton} />
                  )}
                  <Stop
                    src={StopIcon}
                    onClick={() => {
                      setPlaying(false)
                      setOnFetch(true)
                      setPlayStatus(Sound.status.PAUSED)
                    }}
                  />
                </MediaPlayer>
              </div>
              <div className='col-md-3'>
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

const Stop = styled.img`
  color: #ffffff;
`

const MediaPlayer = styled.div`
  background-color: #178ce3;
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 24px 24px auto;
  grid-gap: 16px;
  align-items: center;
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
  font-size: 1.8rem;
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
  width: 76%;
`
