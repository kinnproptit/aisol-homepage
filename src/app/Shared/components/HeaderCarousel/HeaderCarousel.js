import React from 'react'
import styled from 'styled-components'

import Button from '../Button/Button'

import Slide from '../../assets/Slide.svg'

export const HeaderCarousel = ({ title, content, subcontent = false, button = false, image }) => {

  return (
    <div
      className='home-carousel'
    >
      <Wrapper>
        <img className='d-block' src={image || Slide} alt='First slide' />
        <div className='container home-carousel__item'>
          <div className='row'>
            <div className='col-md-8 d-flex flex-column align-items-start'>
              <h1 className='heading-big margin-bottom-small home-carousel__heading'>
                {title}
              </h1>
              <h3 className='text-white home-carousel__description margin-bottom-small'>
                {content}
                <br/>
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
