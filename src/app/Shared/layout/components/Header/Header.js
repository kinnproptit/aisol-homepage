import React, { useEffect } from 'react'
import $ from 'jquery'
import styled from 'styled-components'

import { useHistory, Link, useLocation } from 'react-router-dom'

import { DropdownMenu } from '../../../components/Dropdown/DropdownMenu'

import { HeaderCarousel } from '../../../components/HeaderCarousel/HeaderCarousel'
import { IntroCarousel } from '../../../components/HeaderCarousel/IntroCarousel'

import ENGFlag from '../../../../assets/uk.svg'
import VIEFlag from '../../../../assets/vietnam.svg'

import Solution1Banner from '../../../../assets/giaiphap1_banner.png'
import Solution2Banner from '../../../../assets/giaiphap2_banner.png'
import SanPhamBanner from '../../../../assets/sanpham_banner.png'
import LienHeBanner from '../../../../assets/contact_banner.png'

const Header = () => {
  const List = () => {
    return (
      <div className='btn-group'>
        <a
          className='dropdown-toggle dropdown-btn'
          data-toggle='dropdown'
          href='#'
        >
          <StyledFlag src={ENGFlag} alt='eng flag' /> ENG{' '}
          <span className='caret'></span>
        </a>
        <ul className='dropdown-menu'>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <StyledFlag src={ENGFlag} alt='flag' /> ENG
            </a>
          </li>
          <li className='dropdown-item'>
            <a href='javascript:void(0);'>
              <StyledFlag src={VIEFlag} alt='flag' /> VIE
            </a>
          </li>
        </ul>
      </div>
    )
  }

  let { pathname } = useLocation()
  let history = useHistory()

  const handleLink = link => {
    history.push(`/${link}`)
  }

  useEffect(() => {
    $('.dropdown-menu li a').click(function() {
      var selText = $(this).text()
      var imgSource = $(this)
        .find('img')
        .attr('src')
      var img = '<StyledFlag src="' + imgSource + '"/>'
      $(this)
        .parents('.btn-group')
        .find('.dropdown-toggle')
        .html(img + ' ' + selText + ' <span class="caret"></span>')
    })
  })

  const showingCarousel = pathname => {
    switch (pathname) {
      case '/solution1.html':
        return (
          <HeaderCarousel
            title='NHẬN DẠNG TIẾNG NÓI'
            content='Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt, đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường'
            subcontent='Ứng dụng mạnh mẽ trong trợ lý ảo, phòng họp'
            button
            image={Solution1Banner}
          />
        )
      case '/solution2.html':
        return (
          <HeaderCarousel
            title='TỔNG HỢP TIẾNG NÓI'
            content='Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt với giọng điệu tự nhiên, hay và dễ dàng tích hợp với mọi hệ thống'
            button
            image={Solution2Banner}
          />
        )
      case '/product.html':
        return (
          <HeaderCarousel
            title='MCare'
            content='M-Care là giải pháp sử dụng công nghệ chuyển đổi âm thanh thành dạng chữ văn bản (Voice to Text) giúp dễ dàng và thuận tiện hơn trong việc giám sát nội dung các cuộc gọi giữa khách hàng và nhà cung cấp dịch vụ/ sản phẩm'
            button
            image={SanPhamBanner}
          />
        )
      case '/contact.html':
        return (
          <HeaderCarousel
            title='Liên hệ với AISOL'
            content='Liên hệ với Chúng tôi để được hỗ trợ và trải nghiệm các sản phẩm - giải pháp tốt nhất tại thị trường Việt Nam ngày nay'
            image={LienHeBanner}
          />
        )
      default:
        return <IntroCarousel />
    }
  }

  return (
    <React.Fragment>
      <Section className='headernav'>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo'>
              <img src={require('../../../../assets/logo.png')} alt='' />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <Link
                  to=''
                  className='nav__link'
                  onClick={() => handleLink('')}
                >
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
                    to=''
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
                  to=''
                  className='nav__link'
                  onClick={() => handleLink('product.html')}
                >
                  Sản phẩm
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  to=''
                  className='nav__link'
                  onClick={() => handleLink('price.html')}
                >
                  Bảng giá
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  to=''
                  className='nav__link'
                  onClick={() => handleLink('contact.html')}
                >
                  Liên hệ
                </Link>
              </li>
              <List />
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
                to=''
                className='nav-small__link'
                onClick={() => handleLink('')}
              >
                Trang chủ
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                to=''
                className='nav-small__link'
                onClick={() => handleLink('solution1.html')}
              >
                Nhận dạng tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                to=''
                className='nav-small__link'
                onClick={() => handleLink('solution2.html')}
              >
                Tổng hợp tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                to=''
                className='nav-small__link'
                onClick={() => handleLink('product.html')}
              >
                Sản phẩm
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                to=''
                className='nav-small__link'
                onClick={() => handleLink('price.html')}
              >
                Bảng giá
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                to=''
                className='nav-small__link'
                onClick={() => handleLink('contact.html')}
              >
                Liên hệ
              </Link>
            </li>
            <li>
              <List />
            </li>
          </ul>
        </nav>
      </Section>
      {showingCarousel(pathname)}
    </React.Fragment>
  )
}

const Section = styled.section`
  padding-top: 2.3rem;
`

const StyledFlag = styled.img`
  width: 26px;
  height: 18px;
`

export default Header
