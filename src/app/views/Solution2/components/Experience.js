import React from 'react'
import styled from 'styled-components'

import { DropdownMenu } from '../../../Shared/components/Dropdown/DropdownMenu'
import img_player from '../../assets/img_player.png'
import DownloadIcon from '../../assets/Download.svg'
import Button from '../../../Shared/components/Button/Button'

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
                <Textarea>Nội dung trải nghiệm</Textarea>
              </PaperContent>
            </Paper>
            <PlayerContainer>
              <p>Giọng đọc</p>
              <Dropdown1 options={['ABCD', 'ASDBASH', 'ASDGHE']} />
              <FlexContent>
                <P>Tốc độ</P>
                <Dropdown2 options={['0', '1', '2', '3']} />
              </FlexContent>
              <Player src={img_player} />
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
const Player = styled.img`
  margin-bottom: 1em;
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

const StyledDropdown = styled(DropdownMenu)`
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
  margin-bottom: 1em;
`
const Dropdown2 = styled(StyledDropdown)`
  width: 80%;
`

const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`
