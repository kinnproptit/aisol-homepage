/* eslint-disable id-length */
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

import Logo from '../../assets/Logo.svg'

import ENGFlag from '../../assets/flag.svg'
import VIEFlag from '../../assets/flag1.svg'
import { IntroCarousel } from '../../../../app/Shared/components/HeaderCarousel/IntroCarousel'

const Header = ({ history }) => {
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
        .html(img + ' ' + selText + ' <span class="caret" />')
    })
  }, [])

  const handleLink = link => {
    history.push({ pathname: `/${link}` })
  }

  const selectList = () => {
    return (
      <div className='btn-group'>
        <a
          className='dropdown-toggle dropdown-btn'
          data-toggle='dropdown'
          href='#'
        >
          <ENGFlag /> ENG
          <span className='caret' />
        </a>
        <ul className='dropdown-menu'>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <ENGFlag /> ENG
            </a>
          </li>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <VIEFlag /> VIE
            </a>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <React.Fragment>
      <section className='headernav'>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo'>
              <Logo />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#'
                  className='nav__link'
                  onClick={() => handleLink('solution1.html')}
                >
                  About us
                </a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  Porfolio
                </a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  Contact us
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
          <p className='nav__icon' />
          <p className='nav__icon' />
          <p className='nav__icon' />
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

export default withRouter(Header)
