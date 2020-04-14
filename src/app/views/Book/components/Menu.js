import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../../redux/action-creators/book'

import menuIcon from '../../../assets/menu.svg'
import closeIcon from '../../../assets/close.svg'

export const Menu = () => {
  const menuVisible = useSelector(state => state.bookReducer.menuVisible)

  const handleMenu = () => {
    dispatch(Actions.updateMenu(!menuVisible))
  }
  let dispatch = useDispatch()

  return (
    <MenuHamburger>
      {menuVisible ? (
        <Img
          src={closeIcon}
          style={{ marginLeft: '20px' }}
          onClick={handleMenu}
        />
      ) : (
        <Img
          src={menuIcon}
          style={{ marginLeft: '20px' }}
          onClick={handleMenu}
        />
      )}
    </MenuHamburger>
  )
}

const Img = styled.img`
  width: 20px;
  cursor: pointer;
`

const MenuHamburger = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 990px) {
    display: none;
  }
`
