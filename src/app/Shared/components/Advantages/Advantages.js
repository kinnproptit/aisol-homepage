import React from 'react'
import styled from 'styled-components'

export const Advantages = ({ data = [] }) => {
  const AdvantageItem = data.map(({ image, title, content }, index) => (
    <div
      className='advantage-item col-md-4 d-flex flex-column align-items-center flex-row'
      key={index}
    >
      <div className='advantage-item__image margin-bottom-medium'>
        <Img src={image} alt='Advantage item image' />
      </div>

      <div className='advantage-item__content d-flex flex-column align-items-center align-items-start margin-left-2'>
        <div className='advantage-item__heading margin-bottom-small'>
          {title}
        </div>
        <p className='advantage-item__description text-center'>{content}</p>
      </div>
    </div>
  ))

  return (
    <div className='border--top'>
      <div className='container margin-bottom-large'>
        <h1 className='advantage__heading margin-bottom-big'>Ưu điểm</h1>
        <div className='row'>{AdvantageItem}</div>
      </div>
    </div>
  )
}

const Img = styled.img`
  max-width: 10rem;
  max-height: 10rem;
`
