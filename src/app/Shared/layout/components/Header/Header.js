import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import loadable from '@loadable/component'

import { useHistory, Link, useLocation } from 'react-router-dom'

import environments from '../../../../../environments'
import { LoadingIndicator } from '../../../../../packages/ui'

import { DropdownMenu } from '../../../components/Dropdown/DropdownMenu'
// import { HeaderCarousel } from '../../../components/HeaderCarousel/HeaderCarousel'
// import { IntroCarousel } from '../../../components/HeaderCarousel/IntroCarousel'

import Logo from '../../../../assets/AISOL-2.png'
import Logo_mb from '../../../../assets/logo_aisol.png'

import Solution1Banner from '../../../../assets/giaiphap1_banner.png'
import Solution_mbBanner from '../../../../assets/so1_pc.png'
import Solution2_mbBanner from '../../../../assets/mb2_so2.png'
import Solution2Banner from '../../../../assets/giaiphap2_banner.png'
import SanPhamBanner from '../../../../assets/sanpham_banner.png'
import SanPham_mbBanner from '../../../../assets/mb_pro.png'
import LienHeBanner from '../../../../assets/contact_banner.png'
import LienHe_mbBanner from '../../../../assets/mb_con.png'

import { DropdownLanguage } from '../../../components/Dropdown/DropdownLanguage'

const IntroCarousel = loadable(
  () => import('../../../components/HeaderCarousel/IntroCarousel'),
  {
    fallback: LoadingIndicator
  }
)

const HeaderCarousel = loadable(
  () => import('../../../components/HeaderCarousel/HeaderCarousel'),
  {
    fallback: LoadingIndicator
  }
)

const Header = () => {
  const [isClicked, setClick] = useState(false)

  const List = ({ classCss }) => {
    return <DropdownLanguage options={['VIE', 'ENG']} classCss={classCss} />
  }

  let { pathname, location } = useLocation()
  let history = useHistory()

  const handleLink = link => {
    history.push(`${link}`)
  }

  useEffect(() => {
    document.querySelector('section').scrollIntoView()
  }, [])

  const showingCarousel = pathname => {
    switch (pathname) {
      case environments.linkToASR:
        return (
          <HeaderCarousel
            title='NHẬN DẠNG TIẾNG NÓI'
            content='Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt, đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường'
            subcontent='Ứng dụng mạnh mẽ trong trợ lý ảo, phòng họp'
            button
            image={Solution1Banner}
            image2={Solution_mbBanner}
            classNameImg1=' so_pc'
            classNameImg2='so_mb'
            classCss='bg_so1'
            link={environments.linkToASR}
            idScroll='asr-demo'
          />
        )
      case environments.linkToTTS:
        return (
          <HeaderCarousel
            title='TỔNG HỢP TIẾNG NÓI'
            content='Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt với giọng điệu tự nhiên, hay và dễ dàng tích hợp với mọi hệ thống'
            button
            image={Solution2Banner}
            image2={Solution2_mbBanner}
            classNameImg1='so2_pc'
            classNameImg2='so2_mb'
            classCss='bg_so2'
            link={environments.linkToTTS}
            idScroll='tts-demo'
          />
        )
      case environments.linkToOCR:
        return (
          <HeaderCarousel
            title='OCR'
            content='Chuyển đổi hình ảnh và PDF thành văn bản'
            button
            image={Solution2Banner}
            image2={Solution2_mbBanner}
            classNameImg1='so2_pc'
            classNameImg2='so2_mb'
            classCss='bg_so2'
            link={environments.linkToOCR}
            idScroll='tts-demo'
          />
        )
      case environments.linkToProduct:
        return (
          <HeaderCarousel
            title='MCare'
            content='M-Care là giải pháp sử dụng công nghệ chuyển đổi âm thanh thành dạng chữ văn bản (Voice to Text) giúp dễ dàng và thuận tiện hơn trong việc giám sát nội dung các cuộc gọi giữa khách hàng và nhà cung cấp dịch vụ/ sản phẩm'
            button
            image={SanPhamBanner}
            image2={SanPham_mbBanner}
            classNameImg1='pro_pc'
            classNameImg2='pro_mb'
          />
        )
      case environments.linkToContact:
        return (
          <HeaderCarousel
            title='Liên hệ với AISOL'
            content='Liên hệ với Chúng tôi để được hỗ trợ và trải nghiệm các sản phẩm - giải pháp tốt nhất tại thị trường Việt Nam ngày nay'
            image={LienHeBanner}
            image2={LienHe_mbBanner}
            classNameImg1='con_pc'
            classNameImg2='con_mb'
          />
        )
      case environments.linkToBook:
        return (
          <HeaderCarousel
            title='Sách nói'
            content='Giải pháp số hóa các giáo trình học từ dạng sách hoặc truyện đọc chữ truyền thống thành dạng điện tử dưới dạng sách nói'
            image={LienHeBanner}
            image2={LienHe_mbBanner}
            classNameImg1='con_pc'
            classNameImg2='con_mb'
            button
            link={environments.linkToBook}
          />
        )
      default:
        return <IntroCarousel />
    }
  }

  let headerColor = ''
  if (pathname === environments.linkToASR) {
    headerColor = 'solution1-color'
  } else if (pathname === environments.linkToTTS) {
    headerColor = 'solution2-color'
  } else if (pathname === environments.linkToOCR) {
    headerColor = 'solution2-color'
  } else if (pathname === environments.linkToProduct) {
    headerColor = 'product-color'
  } else if (pathname === environments.linkToContact) {
    headerColor = 'contact-color'
  } else {
    headerColor = 'homepage-color'
  }

  return (
    <React.Fragment>
      <Section className={`${headerColor} headernav`}>
        <div className='nav-wrapper'>
          <nav className='nav'>
            <div className='nav__logo' onClick={() => handleLink('/')}>
              <Img src={Logo} alt='' />
            </div>

            <ul className='nav__list'>
              <li className='nav__item'>
                <Link className='nav__link' onClick={() => handleLink('/')}>
                  Trang chủ
                </Link>
              </li>
              <li className='nav__item'>
                <DropdownMenu
                  isLink
                  options={[
                    {
                      to: environments.linkToASR,
                      content: 'Nhận dạng tiếng nói'
                    },
                    {
                      to: environments.linkToTTS,
                      content: 'Tổng hợp tiếng nói'
                    },
                    {
                      to: environments.linkToOCR,
                      content: 'OCR'
                    }
                  ]}
                >
                  <Link className='nav__link'>Giải pháp</Link>
                </DropdownMenu>
                {/* Giải pháp */}
              </li>
              <li className='nav__item'>
                <DropdownMenu
                  isLink
                  options={[
                    {
                      to: environments.linkToProduct,
                      content: 'M-Care'
                    },
                    {
                      to: environments.linkToBook,
                      content: 'Sách nói'
                    }
                  ]}
                >
                  <Link className='nav__link'>Sản phẩm</Link>
                </DropdownMenu>
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink(environments.linkToPrice)}
                >
                  Bảng giá
                </Link>
              </li>
              <li className='nav__item'>
                <Link
                  className='nav__link'
                  onClick={() => handleLink(environments.linkToContact)}
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
          onClick={() => setClick(!isClicked)}
        />
        <label htmlFor='toggle-nav' className='nav__toggle-btn'>
          <P isClicked={isClicked} className='nav__icon'></P>
          <P isClicked={isClicked} className='nav__icon'></P>
          <P isClicked={isClicked} className='nav__icon'></P>
        </label>

        <nav className='nav-small'>
          <div className='nav__logo2' onClick={() => handleLink('/')}>
            <Img src={Logo_mb} alt='' className='logo2' />
          </div>
          <ul className='nav-small__list'>
            {/* <li className='nav-small__item'>
              <Link className='nav-small__link' onClick={() => handleLink('/')}>
                Trang chủ
              </Link>
            </li> */}
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToASR)}
              >
                Nhận dạng tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToTTS)}
              >
                Tổng hợp tiếng nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToOCR)}
              >
                OCR
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToProduct)}
              >
                M-Care
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToBook)}
              >
                Sách nói
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToPrice)}
              >
                Bảng giá
              </Link>
            </li>
            <li className='nav-small__item'>
              <Link
                className='nav-small__link'
                onClick={() => handleLink(environments.linkToContact)}
              >
                Liên hệ
              </Link>
            </li>
            <li>
              <List classCss='nav-bar-small' />
            </li>
          </ul>
        </nav>
      </Section>
      {showingCarousel(pathname)}
    </React.Fragment>
  )
}

const Img = styled.img`
  width: 182px;
`
const Section = styled.section`
  padding-top: 2.3rem;
`

const StyledFlag = styled.img`
  width: 26px;
  height: 18px;
`

const P = styled.p`
  background-color: ${props => (props.isClicked ? '#000000' : '#fffffff')};
`

export default Header
