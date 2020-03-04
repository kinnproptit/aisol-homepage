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

  return to ? (
    <a href={to}>
      <Wrapper
        className={`btn ${className}`}
        isMarginLeft={isMarginLeft}
        onClick={onClick}
      >
        <InsideButton />
      </Wrapper>
    </a>
  ) : (
    <Wrapper
      className={`btn ${className}`}
      isMarginLeft={isMarginLeft}
      onClick={onClick}
    >
      <InsideButton />
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  margin-left: ${props => (props.isMarginLeft ? '15px' : '0px')};
`
const Text = styled.p`
  margin: 0 0 0 10px;
  color: white;
  font-size: 16px;
`

const Row = styled.div``
