import React from 'react'

import AdvantageImg1 from '../../assets/advantage1.svg'

export const Advantages = () => {
  const AdvantageItem = [...Array(3)].map(e => {
    return (
      <div className='advantage-item col-md-4 d-flex flex-column align-items-center'>
        <div className='advantage-item__image margin-bottom-medium'>
          <img src={AdvantageImg1} alt='Advantage item image' />
        </div>

        <div className='advantage-item__content d-flex flex-column align-items-center'>
          <div className='advantage-item__heading margin-bottom-small'>
            Giọng đọc tự nhiên
          </div>
          <p className='advantage-item__description text-center'>
            Với việc sử dụng các công nghệ tiên tiến trên thế giới, hệ thống
            tổng hợp của chúng tôi cho giọng đọc tự nhiên, ngắt nghỉ tự động và
            kết hợp biểu cảm chính xác
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className='container margin-bottom-large'>
      <h1 className='advantage__heading margin-bottom-big'>Ưu điểm</h1>
      <div className='row'>{AdvantageItem}</div>
    </div>
  )
}
