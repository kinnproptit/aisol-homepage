import React from 'react'
import styled from 'styled-components'

import { DropdownMenu } from '../../../Shared/components/Dropdown/DropdownMenu'
import img_player from '../../assets/img_player.png'

export const Mp3Experience = () => {
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
                <Textarea>
                  Hello there ! Here's a paper text area, feel free to type
                  something ...
                </Textarea>
              </PaperContent>
            </Paper>
            <PlayerContainer>
              <p>Giọng đọc</p>
              <DropdownMenu options={['ABCD', 'ASDBASH', 'ASDGHE']} />
              <FlexContent>
                <p>Tốc độ</p>
                <DropdownMenu options={['0', '1', '2', '3']} />
              </FlexContent>
              <Player src={img_player}></Player>
              <div>
                <DownloadButton>Tải xuống</DownloadButton>
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
  justify-content: center;
`
const ExperienceInput = styled.input`
  width: 60%;
  height: 100%;
`
const PlayerContainer = styled.div`
  width: 40%;
`
const Player = styled.img`
  width: 70%;
`
const DownloadButton = styled.a`
  width: 70%;
  background: red;
  color: #000;
`

const Paper = styled.div`
  width: 60%;
`
const PaperContent = styled.div`
  ${'' /* position: absolute; */}
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 15px;
  background: linear-gradient(transparent, transparent 29px, gray 29px);
  background-size: 30px 30px;
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
