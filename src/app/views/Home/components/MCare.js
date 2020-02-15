import React from 'react'

import MCareImage from '../assets/image-mcare.svg'
import checkIcon from '../assets/ico_check.svg'

export const MCare = () => {
  return (
    <div className='m-care-container margin-bottom-large'>
      <div className='m-care-main container'>
        <div className='row'>
          <div className='col-md-7 m-care-image__container'>
            {/* <img
              className='img-fluid m-care-image__main'
              src={MCareImage}
              alt='m-care-image'
            /> */}
            <MCareImage className='img-fluid m-care-image__main' />
          </div>
          <div className='col-md-5'>
            <div className='m-care__description'>
              <h1 className='text-with-border-left margin-bottom-small'>
                <p>Sản phẩm</p>
                <p className='heading-big'>M care</p>
              </h1>

              <ul className='m-care__description-list__item'>
                <li className='d-flex justify-content-between align-items-start m-care__description-list__item'>
                  {/* <img src={checkIcon} alt='check-icon' /> */}
                  <checkIcon />
                  <p className='m-care__description-list__item__content'>
                    Giám sát được toàn bộ hoạt động và nội dung cuộc đàm thoại
                    giữa điện thoại viên với khách hàng và phát hiện nhanh các
                    cuộc gọi bất thường
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
