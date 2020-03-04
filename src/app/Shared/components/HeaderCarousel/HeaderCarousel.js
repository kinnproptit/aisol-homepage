import React, { useRef } from 'react'
import styled from 'styled-components'

import Button from '../Button/Button'

import Slide from '../../../assets/homepage_banner.svg'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export const HeaderCarousel = ({
  title,
  content,
  subcontent = false,
  button = false,
  image,
  image2,
  classCss,
  classNameImg1,
  classNameImg2
}) => {
  const executeScroll = myRef => scrollToRef(myRef)

  return (
    <div className={`${classCss} home-carousel`}>
      <Wrapper>
        <img
          className={`${classNameImg1} d-block`}
          src={image || Slide}
          alt='First slide'
        />
        <img
          className={`${classNameImg2} d-none`}
          src={image2 || Slide}
          alt='First slide'
        />
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
                <Button
                  text='Trải nghiệm ngay'
                  className='btn btn--yellow btn_ye'
                  buttonCustom='button_bann'
                  textCustom='yellow_so1'
                />
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
