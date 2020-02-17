import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'antd'

export const DropDownMenu = ({ options }) => {
  const [selected, setSelected] = useState([options[0]])
  const menu = (
    <Menu
      onClick={({ key }) => {
        setSelected(options[key])
      }}
    >
      {options.map((option, index) => {
        return <Menu.Item key={index}>{option}</Menu.Item>
      })}
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className='ant-dropdown-link' href='#'>
        {selected} <Icon type='down' />
      </a>
    </Dropdown>
  )
}
