import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

import { scrollToPage } from '../BookContainer'

export const InputBar = () => {
  let dispatch = useDispatch()

  const page = useSelector(state => state.bookReducer.page)

  const [input, setInput] = useState(page)

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    scrollToPage(input)
    dispatch(Actions.updatePageBook(parseInt(input)))
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
          <i className='fas fa-play-circle'></i>
        </button>
      </div>
    </PlayDiv>
  )
}

const PlayDiv = styled.div``

const LargeInput = styled.input`
  @media (max-width: 900px) {
    display: none;
  }
`

const SmallInput = styled.input`
  @media (min-width: 900px) {
    display: none;
  }
`
