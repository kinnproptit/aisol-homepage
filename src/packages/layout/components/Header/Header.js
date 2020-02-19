import React, { useEffect, useRef } from 'react'
import $ from 'jquery'
import styled from 'styled-components'
import useWindowScroll from '@react-hook/window-scroll'

import { useState } from '../../../core'

import { useHistory, Link, useLocation } from 'react-router-dom'

import { DropdownMenu } from '../../../../app/Shared/components/Dropdown/DropdownMenu'

import ENGFlag from '../../assets/flag.svg'
import VIEFlag from '../../assets/flag1.svg'

import { IntroCarousel } from '../../../../app/Shared/components/HeaderCarousel/IntroCarousel'
import { HeaderCarousel } from '../../../../app/Shared/components/HeaderCarousel/HeaderCarousel'

import HeaderSolution1 from '../../../../app/views/assets/HeaderSolution1.svg'
import HeaderContact from '../../../../app/views/assets/Contact.svg'

const Header = () => {
  useEffect(() => {
    $('.dropdown-menu li a').click(function() {
      var selText = $(this).text()
      var imgSource = $(this)
        .find('img')
        .attr('src')
      var img = '<img src="' + imgSource + '"/>'
      $(this)
        .parents('.btn-group')
        .find('.dropdown-toggle')
        .html(img + ' ' + selText + ' <span class="caret"></span>')
    })
  })

  const selectList = () => {
    return (
      <div className='btn-group'>
        <a
          className='dropdown-toggle dropdown-btn'
          data-toggle='dropdown'
          href='#'
        >
          <img src={ENGFlag} alt='eng flag'></img> ENG{' '}
          <span className='caret'></span>
        </a>
        <ul className='dropdown-menu'>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <img src={ENGFlag} alt='flag'></img> ENG
            </a>
          </li>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <img src={VIEFlag} alt='flag'></img> VIE
            </a>
          </li>
        </ul>
      </div>
    )
  }

  let { pathname } = useLocation()
  let history = useHistory()
  const ref = useRef()

  const handleLink = link => {
    history.push(`/${link}`)
  }

  const [state, setState] = useState({ isHide: false })

  const hideBar = () => {
    let { isHide } = state
    window.scrollY > ref.current
      ? !isHide && setState({ isHide: true })
      : isHide && setState({ isHide: false })

      ref.current = window.scrollY
      console.log(isHide)
  }

  useEffect(() => {
    window.addEventListener('scroll', hideBar)
    return () => {
      window.removeEventListener('scroll', hideBar)
    }
  })

  let classHide = state.isHide ? 'hide' : ''

  return (
    <React.Fragment>
      <Section className='headernav' className={'topbar ' + classHide}>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo'>
              <img src={require('../../assets/Logo.png')} alt='' />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <Link className='nav__link' onClick={() => handleLink('')}>
                  Trang chủ
                </Link>
              </li>
              <li className='nav__item'>
                <DropdownMenu
                  isLink
                  options={[
                    { to: '/solution1.html', content: 'Nhận dạng tiếng nói' },
                    { to: '/solution2.html', content: 'Tổng hợp tiếng nói' }
                  ]}
                >
                  <Link
                    className='nav__link'
                    // onClick={() => handleLink('solution1.html')}
                  >
                    Giải pháp
                  </Link>
                </DropdownMenu>
                {/* Giải pháp */}
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink('product.html')}
                >
                  Sản phẩm
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink('price.html')}
                >
                  Bảng giá
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink('contact.html')}
                >
                  Liên hệ
                </Link>
              </li>
              {selectList()}
            </ul>
          </nav>
        </div>
        <input
          type='checkbox'
          className='nav__checkbox'
          name='checkbox'
          id='toggle-nav'
        />
        <label htmlFor='toggle-nav' className='nav__toggle-btn'>
          <p className='nav__icon'></p>
          <p className='nav__icon'></p>
          <p className='nav__icon'></p>
        </label>

        <nav className='nav-small'>
          <ul className='nav-small__list'>
            <li className='nav-small__item'>
              <Link
                href='#'
                className='nav-small__link'
                onClick={() => handleLink('')}
              >
                Trang chủ
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('solution1.html')}
              >
                Nhận dạng tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('solution2.html')}
              >
                Tổng hợp tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('product.html')}
              >
                Sản phẩm
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('price.html')}
              >
                Bảng giá
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('contact.html')}
              >
                Liên hệ
              </Link>
            </li>
            <li>{selectList()}</li>
          </ul>
        </nav>
      </Section>
      {pathname === '/' && (
        <IntroCarousel />
      )}
      {pathname === '/solution1.html' && (
        <HeaderCarousel title='efhefeef' content='feofihe' image={HeaderSolution1} />
      )}
      {pathname === '/solution2.html' && (
        <HeaderCarousel title='efhefeef' content='feofihe' image='' />
      )}
      {pathname === '/product.html' && (
        <HeaderCarousel title='efhefeef' content='feofihe' image='' />
      )}
      {pathname === '/contact.html' && (
        <HeaderCarousel title='efhefeef' content='feofihe' image={HeaderContact} />
      )}
    </React.Fragment>
  )
}

const Section = styled.section`
  padding-top: 2.3rem;
`

export default Header
