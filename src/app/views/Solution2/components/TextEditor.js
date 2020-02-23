import React, {useState} from 'react'
import styled from 'styled-components'

export const TextEditor = ({ onChangeText }) => {

    const [state, setState] = useState('')

    // const onChangeText = e => {
    //     setState(e.target.value)
    // }

  return (
    <Textarea onChange={onChangeText}>
      Nội dung trải nghiệm
    </Textarea>
  )
}

const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  line-height: 30px;
  padding: 0 5px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  z-index: 1;
`
