import React from 'react'
import styled from 'styled-components'

const Button = ({ icon, text, className = 'btn--green', isMarginLeft = false }) => {
  return (
    <Wrapper className={`btn ${className}`} isMarginLeft={isMarginLeft}>
      <Row className='row align-items-center'>
        {icon && (<img src={icon} />)}
        <Text>{text}</Text>
      </Row>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  margin-left: ${props => props.isMarginLeft ? '15px' : '0px'};
`
const Text = styled.p`
  margin: 0;
  ${'' /* margin-left: 10px; */}
  color: white;
  font-size: 18px;
`

const Row = styled.div``