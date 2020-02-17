import React, { Component, useEffect } from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'

import ENGFlag from '../../assets/flag.svg'
import VIEFlag from '../../assets/flag1.svg'

import { IntroCarousel } from '../../../../app/Shared/components/HeaderCarousel/IntroCarousel'

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

  let history = useHistory()

  const handleLink = link => {
    history.push(`/${link}`)
  }

  return (
    <React.Fragment>
      <section className='headernav'>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo'>
              <img src={require('../../assets/Logo.svg')} alt='' />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <a className='nav__link' onClick={() => handleLink('/')}>
                  Trang chủ
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('solution1.html')}
                >
                  Giải pháp
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('product.html')}
                >
                  Sản phẩm
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('price.html')}
                >
                  Bảng giá
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('contact.html')}
                >
                  Liên hệ
                </a>
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
              <a href='#' className='nav-small__link'>
                Home
              </a>
            </li>
            <li className='nav-small__item'>
              <a href='#' className='nav-small__link'>
                About us
              </a>
            </li>
            <li className='nav-small__item'>
              <a href='#' className='nav-small__link'>
                Porfolio
              </a>
            </li>
            <li className='nav-small__item'>
              <a href='#' className='nav-small__link'>
                Contact us
              </a>
            </li>
            <li>{selectList()}</li>
          </ul>
        </nav>
      </section>
      <IntroCarousel />
    </React.Fragment>
  )
}

export default Header
