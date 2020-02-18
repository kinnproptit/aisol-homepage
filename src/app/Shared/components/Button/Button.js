import React from 'react'
import styled from 'styled-components'

const Button = ({ icon, text }) => {
  return (
    <Wrapper className='btn btn--green'>
      <Row className='row align-items-center'>
        <img src={icon} />
        <Text>{text}</Text>
      </Row>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  background-color: #5cc2a6;
  margin-left: 15px;
`
const Text = styled.p`
  margin: 0;
  margin-left: 10px;
  color: white;
`

const Row = styled.div``
