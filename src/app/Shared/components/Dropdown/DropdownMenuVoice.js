import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Dropdown, Icon } from 'antd'

import { useState } from '../../../../packages/core'

export const DropdownMenuVoice = ({
  data = [],
  className,
  onClick
}) => {
  const options = data.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  const [state, setState] = useState({
    selected: options[0].label,
    id: options[0].value
  })

  const menu = (
    <Menu
      onClick={({ key }) => {
        setState({ selected: options[key].label })
        onClick(options[key].value)
      }}
    >
      {options.map(({ label }, index) => {
        return <Menu.Item key={index}>{label}</Menu.Item>
      })}
    </Menu>
  )
  return (
    <Dropdown className={className} overlay={menu} trigger={['click']}>
        <Link className='ant-dropdown-link' to='#'>
          {state.selected} <Icon type='down' />
        </Link>
    </Dropdown>
  )
}

