import React from 'react'
import { withRouter } from 'react-router-dom'
import { Select } from 'antd'

import Logo from '../../assets/Logo.svg'
import ENGFlag from '../../assets/flag.svg'
import VIEFlag from '../../assets/flag1.svg'

import { IntroCarousel } from '../../../../app/Shared/components/HeaderCarousel/IntroCarousel'

const Header = ({ history }) => {
  const handleLink = link => {
    history.push({ pathname: `${link}` })
  }

  const { Option } = Select
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
                <a className='nav__link' onClick={() => handleLink('/')}>
                  Trang chủ
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('/solution1.html')}
                >
                  Giải pháp
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('/product.html')}
                >
                  Sản phẩm
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('/price.html')}
                >
                  Bảng giá
                </a>
              </li>
              <li className='nav__item'>
                <a
                  className='nav__link'
                  onClick={() => handleLink('/contact.html')}
                >
                  Liên hệ
                </a>
              </li>
            </ul>

            <div>
              <Select
                className='nav__selection'
                showSearch
                style={{ width: 100 }}
                placeholder='Select language'
                optionFilterProp='children'
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value='eng'>ENG</Option>
                <Option value='vie'>VIE</Option>
              </Select>
            </div>
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
            <li>
              <Select
                className='nav__selection'
                showSearch
                style={{ width: '200px' }}
                placeholder='Select a person'
                optionFilterProp='children'
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                // 	option.props.children
                // 		.toLowerCase()
                // 		.indexOf(input.toLowerCase()) >= 0
                // }
              >
                <Option value='eng'>
                  <ENGFlag />
                  ENG
                </Option>
                <Option value='vie'>
                  <VIEFlag />
                  VIE
                </Option>
              </Select>
            </li>
          </ul>
        </nav>
      </section>
      <IntroCarousel />
    </React.Fragment>
  )
}

export default withRouter(Header)
