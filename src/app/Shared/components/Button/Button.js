import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Button = ({
  icon,
  text,
  className = 'btn--green',
  isMarginLeft = false,
  buttonCustom,
  textCustom,
  onClick,
  to = false
}) => {
  const InsideButton = () => {
    return (
      <Row className={`${buttonCustom} row align-items-center`}>
        {icon && <img src={icon} />}
        <Text className={`${textCustom}`}>{text}</Text>
      </Row>
    )
  }

  return (
    <Wrapper
      className={`btn ${className}`}
      isMarginLeft={isMarginLeft}
      onClick={onClick}
    >
      {to ? (
        <a href={to}>
          <InsideButton />
        </a>
      ) : (
        <InsideButton />
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
  color: white;
  font-size: 18px;
`

const Row = styled.div``
