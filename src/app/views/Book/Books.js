import React, { useEffect } from 'react'
import FileViewer from 'react-file-viewer'
import { useSelector } from 'react-redux'

import { AudioPlayer } from './components/AudioPlayer'

export const AudioBook = ({ data, playAll }) => {
  const page = useSelector(state => state.bookReducer.page)

  let book = data.filter(({ id }) => id === page)
  return book.map(({ id, content, audio }) => (
    <React.Fragment key={id}>
      <Book content={content} />
      <AudioPlayer audio={audio} playAll={playAll} />
    </React.Fragment>
  ))
}

const type = 'pdf'

const Book = ({ content }) => {
  const zoom = useSelector(state => state.bookReducer.zoom)

  useEffect(() => {
    let canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.style.width = `${zoom}px`
      // canvas.width = zoom
    }
  }, [zoom])

  return <FileViewer fileType={type} filePath={content} />
}
