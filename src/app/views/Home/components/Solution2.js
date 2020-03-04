import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import enviroments from '../../../../environments'
import Button from '../../../Shared/components/Button/Button'

import Icon from '../../../assets/ic_wave.png'
import LeftImg from '../../../assets/homepage_tonghop2.svg'

export const Solution2 = ({ image, title, description, id = 2 }) => {
  let history = useHistory()

  return (
    <div
      className={`homepage-solution homepage-solution--${
        id % 2 ? 'even' : 'odd'
      }`}
    >
      {/* <img
        src={image}
        className='homepage-solution__image'
        alt='Homepage solution banner'
      /> */}
      <div className='homepage-solution__main'>
        <div className=' h-100'>
          <div className='row h-100 flex-row-reverse'>
            <div
              className={`col-md-6  col-sm-12 d-flex flex-column  ${
                id % 2 ? '' : 'padding-twoside-large'
              }`}
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
              <p className='homepage-solution2__description margin-bottom-extra-large'>
                {description}
              </p>
              <div className='homepage-solution__btn-group'>
                <button
                  className='btn btn--green'
                  onClick={() => history.push(enviroments.linkToTTS)}
                >
                  Xem chi tiết
                </button>

                <Button
                  icon={Icon}
                  text='Demo giải pháp'
                  className='btn btn--red homepage-button-2'
                  onClick={() => history.push({
                    pathname: `${enviroments.linkToTTS}`,
                    state: {
                      scroll: true
                    }
                  })}
                />
              </div>
            </div>
            <LeftDiv className='col-md-6 col-sm-12 homepage-solution__placeholder'>
              <img src={LeftImg} className='solution2-image' />
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
