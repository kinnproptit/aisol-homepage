import React from 'react'
import styled from 'styled-components'

const ButtonOutline = ({ icon, text = '', className = false }) => {
  return (
    <Wrapper className={`btn btn-outline-secondary btn-ux-outline ${className}`}>
      <Row className='row'>
        <img src={icon} />
        <Text>{text}</Text>
      </Row>
    </Wrapper>
  )
}

export default ButtonOutline

const Wrapper = styled.button`
  margin-left: 15px;
  height: 100%;
`
const Text = styled.p`
  margin: 0;
  margin-left: 10px;
  color: black;
`

const Row = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`
