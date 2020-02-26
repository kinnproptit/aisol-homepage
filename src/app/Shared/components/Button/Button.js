import React from 'react'
import styled from 'styled-components'

const Detail = ({ icon, text }) => {
  return (
    <Row className='row align-items-center'>
      {icon && <img src={icon} />}
      <Text>{text}</Text>
    </Row>
  )
}

const Button = ({
  icon,
  text,
  className = 'btn--green',
  className2 = '',
  isMarginLeft = false,
  to = false,
  onClick = false
}) => {
  return (
    <Wrapper
      className={`btn ${className} ${className2}`}
      isMarginLeft={isMarginLeft}
      onClick={onClick}
    >
      {to ? (
        <a href={to}>
          <Detail icon={icon} text={text} />
        </a>
      ) : (
        <Detail icon={icon} text={text} />
      )}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  margin-left: ${props => (props.isMarginLeft ? '15px' : '0px')};
`
const Text = styled.p`
  margin: 0;
  margin-left: 10px;
  color: white;
  font-size: 18px;
`

const Row = styled.div`
  justify-content: center;
`
