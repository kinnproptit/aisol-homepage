import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'

export const DropdownMenu = ({ options = [], isLink = false, children, className }) => {
  const [selected, setSelected] = useState([options[0]])
  const menu = (
    <Menu
      onClick={({ key }) => {
        setSelected(options[key])
      }}
    >
      {isLink
        ? options.map(({ to, content }, index) => (
            <StyledMenu key={index}>
              <Link to={to}>{content}</Link>
            </StyledMenu>
          ))
        : options.map((option, index) => {
            return <Menu.Item key={index}>{option}</Menu.Item>
          })}
    </Menu>
  )
  return (
    <Dropdown className={className} overlay={menu} trigger={['click']}>
      {isLink ? (
        children
      ) : (
        <Link className='ant-dropdown-link' href='#'>
          {selected} <Icon type='down' />
        </Link>
      )}
    </Dropdown>
  )
}

const StyledMenu = styled(Menu.Item)`
  padding: 1rem 2rem;
`
