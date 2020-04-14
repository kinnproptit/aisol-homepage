import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

import playIcon from '../../../assets/play-button.png'

import { scrollToPage } from '../BookContainer'

export const InputBar = () => {
  let dispatch = useDispatch()

  const page = useSelector(state => state.bookReducer.page)
  const allPages = useSelector(state => state.bookReducer.allPages)

  const [input, setInput] = useState(page)

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    dispatch(Actions.updatePageBook(parseInt(input)))
    if (input > allPages) {
      dispatch(Actions.updatePageBook(parseInt(allPages)))
      scrollToPage(allPages)
    }
    input && scrollToPage(input)
  }

  return (
    <PlayDiv className='flex-bar'>
      <p className='text1'>Nghe trang</p>
      <div>
        <LargeInput
          className='btn4'
          onChange={handleInputChange}
          placeholder={page}
        />
        <SmallInput
          className='btn4'
          onChange={handleInputChange}
          placeholder='Nhập trang'
        />
        <button type='button' className='btn3' onClick={handleSubmit}>
          <Img src={playIcon} />
        </button>
      </div>
    </PlayDiv>
  )
}

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
