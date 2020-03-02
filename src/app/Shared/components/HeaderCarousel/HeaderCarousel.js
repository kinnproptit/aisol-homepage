import React from 'react'
import styled from 'styled-components'

import Button from '../Button/Button'

import Slide from '../../../assets/homepage_banner.svg'

export const HeaderCarousel = ({
  title,
  content,
  subcontent = false,
  button = false,
  image,
  image2,
  classNameImg1,
  classNameImg2,
}) => {
  return (
    <div className='home-carousel'>
      <Wrapper>
        <img className={`${classNameImg1} d-block`} src={image || Slide} alt='First slide' />
        <img className={`${classNameImg2} d-none`} src={image2 || Slide} alt='First slide' />
        <div className=' home-carousel__item home-banner-carousel'>
          <div className='row'>
            <div className='col-md-10  d-flex flex-column align-items-start'>
              <h1 className='heading-big margin-bottom-small home-carousel__heading banner-title'>
                {title}
              </h1>
              <h3 className='text-white home-carousel__description margin-bottom-small banner-description'>
                {content}
                <br />
                {subcontent}
              </h3>
              {button && (
                <Button text='Trải nghiệm ngay' className='btn btn--yellow ' />
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
`
