import React from 'react'
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
  // const zoom = useSelector(state => state.bookReducer.zoom)
  // if (document.querySelector('canvas')) {
  //   console.log(`${zoom}%`)
  //   document.querySelector('canvas').style.width = '1500px'
  // }

  // var canvas = document.getElementsByTagName('canvas')[0]
  // let canvas = document.querySelector('canvas')
  // if (canvas) {
  //   canvas.style.width = `${zoom}%`
  // }

  return <FileViewer fileType={type} filePath={content} />
}
