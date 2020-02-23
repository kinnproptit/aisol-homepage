import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/audio'
import DownloadIcon from '../../../assets/download.svg'

import Button from '../../../Shared/components/Button/Button'
import { DropdownMenuVoice } from '../../../Shared/components/Dropdown/DropdownMenuVoice'

import { Player } from './PlayerManual'
import { TextEditor } from './TextEditor'

export const SpeechSynthesis = ({
  mp3data,
  onChangeVoice,
  onChangeText,
  state
}) => {
  const dispatch = useDispatch()
  const audioRedux = useSelector(state => state.audioReducer)

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
              <Player token={state.token} voiceId={state.voiceId} text={state.text}/>
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
