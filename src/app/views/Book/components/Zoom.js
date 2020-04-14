import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../../redux/action-creators/book'

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
        <i className='fas fa-search-minus'></i>
      </button>
      <button type='button' className='btn2' onClick={handleZoomIn}>
        <i className='fas fa-search-plus'></i>
      </button>
    </div>
  )
}
