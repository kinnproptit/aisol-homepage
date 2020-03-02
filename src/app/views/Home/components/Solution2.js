import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Button from '../../../Shared/components/Button/Button'

import Icon from '../../../assets/ic_wave.png'
import LeftImg from '../../../assets/homepage_tonghop2.svg'

export const Solution2 = ({ image, title, description }) => {
  let history = useHistory()

  return (
    <Div
      className='homepage-solution homepage-solution--odd'
    >
      <img
        src={image}
        className='homepage-solution__image'
        alt='Homepage solution banner'
      />
      <div className='homepage-solution__main'>
        <div className='container h-100'>
          <div className='row h-100 flex-row-reverse'>
            <div
              className='col-md-6  d-flex flex-column justify-content-center solution-container padding-twoside-large'
            >
              <div className='solution-title'>
                <p className='text-medium giai-phap-cl'>Giải pháp</p>
                <h1 className='heading-big homepage-solution__heading homepage-solution__heading--odd'>
                  {title}
                </h1>
              </div>
              <div>
                <img
                  src={LeftImg}
                  className='homepage-solution__image-mobile'
                  alt='Homepage solution banner mobile'
                />
              </div>
              <p className='homepage-solution__description homepage-solution2__description margin-bottom-extra-large'>
                {description}
              </p>
              <div className='homepage-solution__btn-group'>
                <button className='btn btn--green' onClick={() => history.push('/solution2.html')}>Xem chi tiết</button>

                <Button
                  onClick={() => history.push('/solution2.html')}
                  icon={Icon}
                  text='Demo giải pháp'
                  className='btn btn--red homepage-button-2'
                />
              </div>
            </div>
            <LeftDiv className='col-md-6  homepage-solution__placeholder'>
              <img src={LeftImg} className='solution2-image' />
            </LeftDiv>
          </div>
        </div>
      </div>
    </Div>
  )
}

const LeftDiv = styled.div`
  position: relative;
  
`

const Div = styled.div`
  margin-bottom: 50px;
`
