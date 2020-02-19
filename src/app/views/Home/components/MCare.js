import React from 'react'
import styled from 'styled-components'

import MCareImage from '../../assets/image-mcare.svg'
import checkIcon from '../../assets/ico_check.svg'

export const MCare = () => {
  return (
    <div className='m-care-container margin-bottom-large'>
      <div className='m-care-main'>
        <div className='row'>
          <div className='col-lg-7 m-care-image__container'>
            <img
              className='img-fluid m-care-image__main'
              src={MCareImage}
              alt='m-care-image'
            />
          </div>
          <div className='col-lg-5'>
            <div className='m-care__description'>
              <h1 className='text-with-border-left margin-bottom-small'>
                <SubTitle>SẢN PHẨM</SubTitle>
                <P className='heading-big'>M-CARE</P>
              </h1>

              <ul className='m-care__description-list__item'>
                <li className='d-flex  align-items-start m-care__description-list__item'>
                  <img src={checkIcon} alt='check-icon' />
                  <p className='m-care__description-list__item__content'>
                    Giám sát được toàn bộ hoạt động và nội dung cuộc đàm thoại
                    giữa điện thoại viên với khách hàng và phát hiện nhanh các
                    cuộc gọi bất thường
                  </p>
                </li>
                <li className='d-flex align-items-start m-care__description-list__item'>
                  <img src={checkIcon} alt='check-icon' />
                  <p className='m-care__description-list__item__content'>
                    Nâng cao chất lượng điện thoại viên và tối ưu nguồn chi phí
                    hoạt động CSKH
                  </p>
                </li>
              </ul>
            </div>
            <div className='btn-group margin-bottom-small'>
              <button className='btn btn--blue'>Chi tiết sản phẩm</button>
              <button className='btn btn--red margin-left-small'>
                Chi tiết sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubTitle = styled.p`
  margin: 0 !important;
`

const P = styled.p`
  color: #06658d;
`