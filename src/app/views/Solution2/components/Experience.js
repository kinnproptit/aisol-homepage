import React from 'react'
import styled from 'styled-components'

import { DropDownMenu } from './DropdownMenu'
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
            <ExperienceInput type='text' placeholder='Nội dung trải nghiệm' />
            <PlayerContainer>
              <p>Giọng đọc</p>
              <DropDownMenu options={['ABCD', 'ASDBASH', 'ASDGHE']} />
              <FlexContent>
                <p>Tốc độ</p>
                <DropDownMenu options={['0', '1', '2', '3']} />
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
