import React from 'react'
import styled from 'styled-components'

import { Icon } from 'antd'

import ContactImage from '../../assets/img_contact.svg'

export const Contact = () => {
  return (
    <ContactWrapper className='container margin-bottom-large'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={ContactImage} className='margin-bottom-medium' alt='' />
          <div className='contact-infor'>
            <H3 className='contact-infor--company-name'>
              CÔNG TY CỔ PHẦN GIẢI PHÁP TRÍ TUỆ NHÂN TẠO AISOL
            </H3>
            <p>
              Địa chỉ: Số 99, TT7.2, Khu tái định cư Phú Diễn, Nam Từ Liêm, Hà
              Nội
            </p>{' '}
            <p>Điện thoại: 0912.345.678</p> <p>Email: info@aisol.com.vn</p>
          </div>
        </div>
        <div className='col-md-6'>
          <form className='contact-form' action='#' method='post'>
            <div className='form-group contact-form__item'>
              <input className='contact-form-input' type='text' id='name' />
              <label htmlFor='name' className='contact-form-label'>
                <Icon type='user' />
                <p>Họ và tên</p>
              </label>
            </div>
            <div className='form-group contact-form__item'>
              <input className=' contact-form-input' type='email' id='name' />
              <label htmlFor='name' className='contact-form-label'>
                <Icon type='mail' />
                <p>Email</p>
              </label>
            </div>
            <div className='form-group contact-form__item'>
              <input className='contact-form-input' type='text' id='name' />
              <label htmlFor='name' className='contact-form-label'>
                <Icon type='setting' />
                <p>Nghề nghiệp/Lĩnh vực</p>
              </label>
            </div>
            <div className='form-group contact-form__item'>
              <input className='contact-form-input' type='text' id='name' />
              <label htmlFor='name' className='contact-form-label'>
                <Icon type='home' />
                <p>Công ty</p>
              </label>
            </div>
            <div className='form-group contact-form__item'>
              <textarea
                className=' contact-form-input'
                id='feedback'
                rows='4'
                cols='50'
              />
              <label htmlFor='name' className='contact-form-label'>
                <Icon type='message' />
                <p>Nội dung tin nhắn</p>
              </label>
            </div>
            <input
              type='submit'
              className='btn btn--green'
              value='Gửi thông tin'
            ></input>
          </form>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  // margin-top: 8rem;
`
const H3 = styled.h3`
  color: #06658d;
`
