import React from 'react'
import styled from 'styled-components'

const ButtonOutline = ({ icon, text = '', id = 1, classNameCss, buttonCustom }) => {

  return (
    <Wrapper className={`btn btn-outline-secondary btn-ux-outline ${id === 1 ? 'button1' : 'button2'} ${classNameCss}`}>
      <Row className={`${buttonCustom} row`}>
        <img src={icon} />
        <Text>{text}</Text>
      </Row>
    </Wrapper>
  )
}

export default ButtonOutline

const Wrapper = styled.button`
  margin-left: 15px;
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
