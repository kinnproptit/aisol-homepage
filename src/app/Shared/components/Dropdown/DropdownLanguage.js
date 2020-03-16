import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, Dropdown } from 'antd'

import VIE from '../../../assets/vietnam.svg'
import ENG from '../../../assets/uk.svg'

export const DropdownLanguage = ({
  options = [],
  className,
  onClick = false,
  classCss
}) => {
  const [selected, setSelected] = useState(options[0])
  const menu = (
    <Menu
      onClick={({ key }) => {
        setSelected(options[key])
      }}
    >
      {options.map((option, index) => {
        return (
          <Menu.Item key={index}>
            <StyledFlag src={option === 'VIE' ? VIE : ENG} alt='flag' />{' '}
            {option}
          </Menu.Item>
        )
      })}
    </Menu>
  )

  console.log(selected)
  return (
    <Dropdown className={className} overlay={menu} onClick={onClick}>
      <div className={`${classCss} btn-group langg`}>
        <a
          className='dropdown-toggle dropdown-btn'
          data-toggle='dropdown'
          href='#'
        >
          <StyledFlag src={selected === 'VIE' ? VIE : ENG} alt='flag' />
          {selected}
        </a>
      </div>
    </Dropdown>
  )
}

const StyledFlag = styled.img`
  width: 26px;
  height: 18px;
`
