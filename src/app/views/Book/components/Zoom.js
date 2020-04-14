import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../../redux/action-creators/book'

import ZoomIn from '../../../assets/zoom-in.png'
import ZoomOut from '../../../assets/zoom-out.png'

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
        <img src={ZoomOut} />
      </button>
      <button type='button' className='btn2' onClick={handleZoomIn}>
        <img src={ZoomIn} />
      </button>
    </div>
  )
}
