import React, { useEffect } from 'react'
import $ from 'jquery'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'

import ENGFlag from '../../assets/flag.svg'
import VIEFlag from '../../assets/flag1.svg'

import { IntroCarousel } from '../../../../app/Shared/components/HeaderCarousel/IntroCarousel'

const Header = () => {
  useEffect(() => {
    // $(document).ready(function() {
    /* This is for the sticky navigation*/
    // $('#main-page').waypoint(
    //   function(direction) {
    //     if (direction == 'down') {
    //       $('nav').addClass('fixed')
    //     } else {
    //       $('nav').removeClass('fixed')
    //     }
    //   },
    //   {
    //     offset: '60px;'
    //   }
    // )
    // })

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
      <Section className='headernav'>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo'>
              <img src={require('../../assets/Logo.svg')} alt='' />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <Link className='nav__link' onClick={() => handleLink('')}>
                  Trang chủ
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink('solution1.html')}
                >
                  Giải pháp
                </Link>
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
                Giải pháp
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink('solution2.html')}
              >
                Giải pháp
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
      <IntroCarousel />
    </React.Fragment>
  )
}

const Section = styled.section`
  ${'' /* position: sticky;
  top: 0;
  left: 0;
  z-index: 10; */}
`

export default Header
