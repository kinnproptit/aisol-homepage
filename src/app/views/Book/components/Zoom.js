import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../../redux/action-creators/book'

import ZoomIn from '../../../assets/zoom-in.svg'
import ZoomOut from '../../../assets/zoom-out.svg'

export const Zoom = () => {
  let dispatch = useDispatch()
  const zoom = useSelector(state => state.bookReducer.zoom)

  const handleZoomIn = () => {
    dispatch(Actions.updateZoom(zoom + 20))
  }

  const handleZoomOut = () => {
    dispatch(Actions.updateZoom(zoom - 20))
  }

  return (
    <div className='zoom'>
      <button type='button' className='btn1' onClick={handleZoomOut}>
        <Img src={ZoomOut} />
      </button>
      <button type='button' className='btn2' onClick={handleZoomIn}>
        <Img src={ZoomIn} />
      </button>
    </div>
  )
}

const Img = styled.img`
  width: 20px;
`
