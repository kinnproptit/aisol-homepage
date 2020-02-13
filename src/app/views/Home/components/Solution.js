import React from 'react'
import styled from 'styled-components'

export const Solution = ({ image, title, description, id }) => {
  return (
    <div
      className={`homepage-solution homepage-solution--${
        id % 2 ? 'even' : 'odd'
      }`}
    >
      {/* <LoadableSVG svg={image} /> */}
      <mage
        className='homepage-solution__image'
        alt='Homepage solution banner'
      />
      <div className='homepage-solution__main'>
        <div className={`${id % 2 ? 'container' : 'container-fluid'} h-100`}>
          <div
            className={`row h-100 ${id % 2 === 0 ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`col-md-6 d-flex flex-column justify-content-center ${
                id % 2 ? '' : 'padding-twoside-large'
              }`}
            >
              <p className='text-medium'>Giải pháp</p>
              <h1
                className={`heading-big homepage-solution__heading homepage-solution__heading--${
                  id % 2 ? 'even' : 'odd'
                }`}
              >
                {title}
              </h1>
              <p className='homepage-solution__description margin-bottom-extra-large'>
                {description}
              </p>
              <div className='homepage-solution__btn-group'>
                <button className='btn btn--green'>Xem chi tiết</button>

                <button
                  className={`btn ${id % 2 ? 'btn--yellow' : 'btn--red'}`}
                >
                  <img src='' alt='' />
                  Demo giải pháp
                </button>
              </div>
            </div>
            <div className='col-md-6 homepage-solution__placeholder'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
