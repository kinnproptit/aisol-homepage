import React, { useState } from 'react'
import styled from 'styled-components'

import Carousel from 'react-bootstrap/Carousel'

import SlideImg from '../../assets/Slide.svg'

export const IntroCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      className='home-carousel'
    >
      <Carousel.Item>
        <StyledSlideImg className='d-block' />
        <div className='container home-carousel__item'>
          <div className='row'>
            <div className='col-md-8 d-flex flex-column align-items-start'>
              <h1 className='heading-big margin-bottom-small home-carousel__heading'>
                Nhận dạng tiếng nói
              </h1>
              <h3 className='text-white home-carousel__description margin-bottom-small'>
                Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt,
                đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường
                Ứng dụng mạnh mẽ trong trợ lý ảo, phòng họp thông minh và lĩnh
                vực chăm sóc khách hàng.. giúp tăng trải nghiệm người dùng và
                nâng cao chất lượng cuộc sống. Trải nghiệm (ok để nguyên như
                hiện tại)
              </h3>
              <button className='btn btn--yellow '>Trải nghiệm ngay</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <StyledSlideImg className='d-block' />
        <div className='container home-carousel__item'>
          <div className='row'>
            <div className='col-md-8 d-flex flex-column align-items-start'>
              <h1 className='heading-big margin-bottom-small home-carousel__heading'>
                Nhận dạng tiếng nói
              </h1>
              <h3 className='text-white home-carousel__description margin-bottom-small'>
                Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt,
                đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường
                Ứng dụng mạnh mẽ trong trợ lý ảo, phòng họp thông minh và lĩnh
                vực chăm sóc khách hàng.. giúp tăng trải nghiệm người dùng và
                nâng cao chất lượng cuộc sống. Trải nghiệm (ok để nguyên như
                hiện tại)
              </h3>
              <button className='btn btn--yellow '>Trải nghiệm ngay</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <StyledSlideImg className='d-block' />
        <div className='container home-carousel__item'>
          <div className='row'>
            <div className='col-md-8 d-flex flex-column align-items-start'>
              <h1 className='heading-big margin-bottom-small home-carousel__heading'>
                Nhận dạng tiếng nói
              </h1>
              <h3 className='text-white home-carousel__description margin-bottom-small'>
                Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt,
                đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường
                Ứng dụng mạnh mẽ trong trợ lý ảo, phòng họp thông minh và lĩnh
                vực chăm sóc khách hàng.. giúp tăng trải nghiệm người dùng và
                nâng cao chất lượng cuộc sống. Trải nghiệm (ok để nguyên như
                hiện tại)
              </h3>
              <button className='btn btn--yellow '>Trải nghiệm ngay</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

const StyledSlideImg = styled(SlideImg)``
