import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../redux/action-creators/book'

import { Sidebar } from './components/Sidebar'

import { AudioBook } from './Books'

import './assets/css/book.css'
import playIcon from '../../assets/play-button.png'

import page1 from './assets/pdf2docx/test-page3.pdf'
import page2 from './assets/pdf2docx/test-page7.pdf'
import page3 from './assets/pdf2docx/test-page8.pdf'
import page4 from './assets/pdf2docx/test-page9.pdf'
import page5 from './assets/pdf2docx/test-page10.pdf'
import page6 from './assets/pdf2docx/test-page12.pdf'
import page7 from './assets/pdf2docx/test-page13.pdf'
import page8 from './assets/pdf2docx/test-page14.pdf'
import page9 from './assets/pdf2docx/test-page15.pdf'
import page10 from './assets/pdf2docx/test-page16.pdf'

import audio1 from './assets/pdf2docx/3.wav'
import audio2 from './assets/pdf2docx/7.wav'
import audio3 from './assets/pdf2docx/8.wav'
import audio4 from './assets/pdf2docx/9.wav'
import audio5 from './assets/pdf2docx/10.wav'
import audio6 from './assets/pdf2docx/12.wav'
import audio7 from './assets/pdf2docx/13.wav'
import audio8 from './assets/pdf2docx/14.wav'
import audio9 from './assets/pdf2docx/15.wav'
import audio10 from './assets/pdf2docx/16.wav'
import { InputBar } from './components/InputBar'
import { Zoom } from './components/Zoom'

const data = [
  {
    id: 1,
    content: page1,
    audio: audio1
  },
  {
    id: 2,
    content: page2,
    audio: audio2
  },
  {
    id: 3,
    content: page3,
    audio: audio3
  },
  {
    id: 4,
    content: page4,
    audio: audio4
  },
  {
    id: 5,
    content: page5,
    audio: audio5
  },
  {
    id: 6,
    content: page6,
    audio: audio6
  },
  {
    id: 7,
    content: page7,
    audio: audio7
  },
  {
    id: 8,
    content: page8,
    audio: audio8
  },
  {
    id: 9,
    content: page9,
    audio: audio9
  },
  {
    id: 10,
    content: page10,
    audio: audio10
  }
]

export const scrollToPage = page => {
  let pageNumber = document.getElementById(`page-${page}`)
  let Viewer = document.getElementById('pg-viewer')
  pageNumber && pageNumber.scrollIntoView()
  Viewer && Viewer.scrollIntoView()
}

export const AudioBookContainer = () => {
  let dispatch = useDispatch()

  const page = useSelector(state => state.bookReducer.page)

  const [playAll, setPlayAll] = useState(null)

  // const handlePrev = () => {
  //   dispatch(Actions.updatePageBook(page - 1))
  // }

  // const handleNext = () => {
  //   dispatch(Actions.updatePageBook(page + 1))
  // }

  useEffect(() => {
    document.getElementById('book-audio').scrollIntoView()
  }, [])

  const handlePlayAll = () => {
    dispatch(Actions.updatePageBook(1))
    setPlayAll(true)
    scrollToPage(1)
  }

  const NavBar = () => {
    return (
      <NavBook className='nav-book'>
        <div className='nav-left'></div>
        <div className='nav-right'>
          <Zoom />
          <InputBar />
          <div className='flex-bar'>
            <p className='text2'>Nghe tất cả</p>
            <button type='button' className='btn5' onClick={handlePlayAll}>
              <Img src={playIcon} />
            </button>
          </div>
        </div>
      </NavBook>
    )
  }

  return (
    <div className='book container' id='book-audio'>
      <div className='content'>
        <NavBar />
        <Wrapper>
          <Sidebar data={data} playAll={playAll} />
          <ContentPage>
            <AudioBook data={data} playAll={playAll} />
            <PlayStatus>Bạn đang nghe trang {page}</PlayStatus>
          </ContentPage>
        </Wrapper>
      </div>
    </div>
  )
}

const PlayStatus = styled.div`
  text-align: center;
  position: absolute;
  bottom: 1%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  font-size: 16px;
  font-weight: bold;
`

const Wrapper = styled.div`
  display: flex;
`

const Img = styled.img`
  color: gray;
`

const ContentPage = styled.div`
  border-radius: 0 0 10px 0;
  width: 80%;
  background-color: #ffffff;
  position: relative;

  @media (max-width: 990px) {
    width: 100%;
  }
`

const NavBook = styled.div``
