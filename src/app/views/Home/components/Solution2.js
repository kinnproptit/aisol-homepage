import React from 'react'
import styled from 'styled-components'

import Button from '../../../Shared/components/Button/Button'

import Icon from '../../../assets/ic_wave.png'
import LeftImg from '../../../assets/homepage_tonghop2.svg'

export const Solution2 = ({ image, title, description, id = 2 }) => {
  return (
    <div
      className={`homepage-solution homepage-solution--${
        id % 2 ? 'even' : 'odd'
      }`}
    >
      <img
        src={image}
        className='homepage-solution__image'
        alt='Homepage solution banner'
      />
      <div className='homepage-solution__main'>
        <div className='container h-100'>
          <div
            className='row h-100 flex-row-reverse'>
            <div
              className={`col-md-6 d-flex flex-column justify-content-center ${
                id % 2 ? '' : 'padding-twoside-large'
              }`}
            >
              <p className='text-medium giai-phap-cl'>
                Giải pháp
              </p>
              <h1
                className='heading-big homepage-solution__heading homepage-solution__heading--odd'
              >
                {title}
              </h1>
              <p className='homepage-solution__description margin-bottom-extra-large'>
                {description}
              </p>
              <div className='homepage-solution__btn-group'>
                <button className='btn btn--green'>Xem chi tiết</button>

                <Button
                  icon={Icon}
                  text='Demo giải pháp'
                  className='btn btn--red'
                />
              </div>
            </div>
            <LeftDiv className='col-md-6 homepage-solution__placeholder'>
              <img src={LeftImg} />
            </LeftDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

const LeftDiv = styled.div`
  position: relative;
  left: -23%;
  top: 15%;
`