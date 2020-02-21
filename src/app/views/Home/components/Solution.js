import React from 'react'
import styled from 'styled-components'
import Button from '../../../Shared/components/Button/Button'

import Icon from '../../../assets/ic_wave.png'
import Girl from '../../../assets/support-asia-girl.png'

export const Solution = ({ image, title, description, id = 1 }) => {
  return (
    <div
      className='homepage-solution homepage-solution-even'
    >
      <img
        src={image}
        className='homepage-solution__image'
        alt='Homepage solution banner'
      />
      <div className='homepage-solution__main'>
        <div className='container h-100'>
          <div
            className='row h-100'
          >
            <div
              className='col-md-6 d-flex flex-column justify-content-center'
            >
              <p className='text-medium'>
                Giải pháp
              </p>
              <h1
                className='heading-big homepage-solution__heading homepage-solution__heading--even'
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
                  className='btn--yellow'
                />
              </div>
            </div>
            <GirlDiv className='col-md-6 homepage-solution__placeholder'>
              <img src={Girl} className='girl-absolute' />
            </GirlDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

const GirlDiv = styled.div`
  position: relative;
  right: -17%;
`