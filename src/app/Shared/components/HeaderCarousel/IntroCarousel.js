import React, { useState } from 'react'
import styled from 'styled-components'

import Carousel from 'react-bootstrap/Carousel'

import Slide from '../../../assets/homepage_banner.png'

export const IntroCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const data = [
    {
      image: Slide,
      title: 'Vietnam AI Solutions',
      subtitle: 'Giải pháp trí tuệ nhân tạo cho Việt Nam',
      content:
        'Cung cấp giải pháp thông minh cho các doanh nghiệp trong thời kỳ chuyển đổi sổ Tập hợp các giải pháp và sản phẩm trí tuệ nhân tạo được phát triển bởi các chuyên gia hàng đầu Việt Nam'
    },
    {
      image: Slide,
      title: 'Vietnam AI Solutions',
      subtitle: 'Giải pháp trí tuệ nhân tạo cho Việt Nam',
      content:
        'Cung cấp giải pháp thông minh cho các doanh nghiệp trong thời kỳ chuyển đổi sổ Tập hợp các giải pháp và sản phẩm trí tuệ nhân tạo được phát triển bởi các chuyên gia hàng đầu Việt Nam'
    },
    {
      image: Slide,
      title: 'Vietnam AI Solutions',
      subtitle: 'Giải pháp trí tuệ nhân tạo cho Việt Nam',
      content:
        'Cung cấp giải pháp thông minh cho các doanh nghiệp trong thời kỳ chuyển đổi sổ Tập hợp các giải pháp và sản phẩm trí tuệ nhân tạo được phát triển bởi các chuyên gia hàng đầu Việt Nam'
    }
  ]

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      className='home-carousel'
    >
      {data.map(({ image, title, subtitle, content }) => (
        <Carousel.Item>
          <img className='d-block' src={image} alt='First slide'></img>
          <div className='container home-carousel__item'>
            <div className='row'>
              <div className='col-md-10 d-flex flex-column align-items-start'>
                <Title className='heading-big margin-bottom-small home-carousel__heading'>
                  {title}
                </Title>
                <SubTitle className='text-white '>{subtitle}</SubTitle>
                <h3 className='text-white home-carousel__description margin-bottom-small'>
                  {content}
                </h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

const Title = styled.h1`
  margin-bottom: 0 !important;
`

const SubTitle = styled.h2`
 
  font-weight: 700;
  font-style: italic;
`
