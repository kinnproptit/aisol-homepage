import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { soundManager } from 'soundmanager2/script/soundmanager2-nodebug'

import * as Actions from '../../../redux/action-creators/audio'

import DownloadIcon from '../../../assets/download.svg'

import Button from '../../../Shared/components/Button/Button'
import { DropdownMenuVoice } from '../../../Shared/components/Dropdown/DropdownMenuVoice'

import Sound from './ReactSound'
import { AudioPlayer } from './AudioPlayer'

export const SpeechSynthesis = ({ mp3data, onChangeVoice, state }) => {
  let dispatch = useDispatch()

  useEffect(() => {
    soundManager.setup({
      ignoreMobileRestrictions: true
    })
  })

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

  const onChangeText = event => {
    dispatch(Actions.updatePlayStatus(Sound.status.STOPPED))
    dispatch(Actions.updateText(event.target.value))
  }

  let location = useLocation()

  useEffect(() => {
    if (location.state && location.state.scroll) {
      document.getElementById('tts-demo').scrollIntoView()
    }
  }, [])

  const audioUrl = useSelector(state => state.ttsReducer.audioUrl)

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
                <AudioPlayer state={state} />
              </div>
              <div className='col-lg-4 top_ma'>
                <StyledButton
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
