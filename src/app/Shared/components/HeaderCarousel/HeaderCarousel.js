import React, { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Button from '../Button/Button'

const HeaderCarousel = ({
  title,
  content,
  subcontent = false,
  button = false,
  image,
  image2,
  classCss,
  classNameImg1,
  classNameImg2,
  link,
  idScroll
}) => {
  let history = useHistory()

  return (
    <div className={`${classCss} home-carousel`}>
      <Wrapper>
        <img
          className={`${classNameImg1} d-block`}
          src={image}
          alt='First slide'
        />
        <img
          className={`${classNameImg2} d-none`}
          src={image2}
          alt='First slide'
        />
        <div className=' home-carousel__item home-banner-carousel'>
          <div className='row'>
            <div className='col-md-10 col-lg-6  d-flex flex-column align-items-start banner_hei'>
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
                  onClick={() =>
                    history.push({
                      pathname: link,
                      state: {
                        scroll: true,
                        id: idScroll
                      }
                    })
                  }
                />
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default HeaderCarousel

const Wrapper = styled.div`
  position: relative;
`
