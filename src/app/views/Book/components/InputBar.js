import React, { useState } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'

import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

import { scrollToPage } from '../BookContainer'
import pauseIcon from '../../../assets/pause.svg'
import playIcon from '../../../assets/play.svg'

export const InputBar = () => {
  let dispatch = useDispatch()

  const page = useSelector(state => state.bookReducer.page)
  const allPages = useSelector(state => state.bookReducer.allPages)
  const playing = useSelector(state => state.bookReducer.playing)

  const [input, setInput] = useState(null)

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    dispatch(Actions.updatePageBook(parseInt(input)))
    if (input > allPages) {
      dispatch(Actions.updatePageBook(parseInt(allPages)))
      // scrollToPage(allPages)
    }
    // input && scrollToPage(input)
  }

  const handlePause = () => {
    if (input) {
      handleSubmit()
    } else {
      if (playing) {
        dispatch(Actions.updatePlayStatus(Sound.status.PAUSED))
      } else {
        dispatch(Actions.updatePlayStatus(Sound.status.PLAYING))
      }
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <PlayDiv className='flex-bar'>
      <p className='text1'>Nghe trang</p>
      <div>
        <LargeInput
          className='btn4'
          onChange={handleInputChange}
          placeholder={page}
          onKeyDown={handleKeyDown}
        />
        <SmallInput
          className='btn4'
          onChange={handleInputChange}
          placeholder={`Nghe trang ${page}`}
          onKeyDown={handleKeyDown}
        />
        <button type='button' className='btn3'>
          {/* <Img src={playIcon} onClick={handleSubmit}/> */}
          {playing && !input ? (
            <PauseImg src={pauseIcon} onClick={handlePause} />
          ) : (
            <PauseImg src={playIcon} onClick={handlePause} />
          )}
        </button>
      </div>
    </PlayDiv>
  )
}

const PauseImg = styled.img`
  width: 20px;
  cursor: pointer;
`

const PlayDiv = styled.div``

const Img = styled.img`
  color: gray;
`

const LargeInput = styled.input`
  text-align: center;
  @media (max-width: 900px) {
    display: none;
  }
`

const SmallInput = styled.input`
  text-align: center;
  @media (min-width: 900px) {
    display: none;
  }
`
