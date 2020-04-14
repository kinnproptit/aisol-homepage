import React from 'react'
import styled from 'styled-components'
import { PDFtoIMG } from 'react-pdf-to-image'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

export const Sidebar = ({ data }) => {
  let dispatch = useDispatch()

  const page = useSelector(state => state.bookReducer.page)

  return (
    <PageLeft className='page-left'>
      <FileNameTop className='file-name'>
        <FileName>
          {' '}
          <i className='fas fa-caret-down'></i>
          VV_M2_18298.pdf
        </FileName>
      </FileNameTop>

      {data.map(({ content, id }) => (
        <div className='page-current'>
          <CurrentPage
            id={`page-${id}`}
            className='page'
            isActive={id === page}
            onClick={() => dispatch(Actions.updatePageBook(id))}
          >
            <PDFtoIMG file={content}>
              {({ pages }) => {
                if (!pages.length) return 'Loading...'
                return pages.map((page, index) => (
                  <Img key={index} src={page} />
                ))
              }}
            </PDFtoIMG>
          </CurrentPage>
          <p className='page-index'>{id}</p>
        </div>
      ))}
    </PageLeft>
  )
}

const PageLeft = styled.div`
  overflow-y: scroll;
  border-radius: 0 0 0 10px;
  position: relative;

  @media (max-width: 990px) {
    display: none;
  }
`

const FileNameTop = styled.div`
  position: sticky;
  top: 0;
`

const FileName = styled.div`
  ${'' /* position:  */}
`

const CurrentPage = styled.div`
  border: ${props => (props.isActive ? '2px solid blue' : 'none')};
`

const Img = styled.img`
  width: 100%;
`
