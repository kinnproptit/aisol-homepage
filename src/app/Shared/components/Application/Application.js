import React from 'react'
import styled from 'styled-components'

export const Application = ({ image, sectionTitle, data = [] }) => {
  return (
    <section className='border--top'>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          {sectionTitle}
        </h1>

        <div className='container'>
          <div className='row'>
            <Div className='col-md-6'>
              <Img src={image} />
            </Div>
            <div className='col-md-6'>
              <ul className='application__list'>
                {data.map(({ title, content, subcontent = false }, index) => (
                  <li className='application__item' key={index}>
                    <h3 className='application__item__heading text-with-border-left'>
                      {title}
                    </h3>
                    <p className='application__item__description'>
                      {content}
                      <br />
                      {subcontent}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Img = styled.img`
  width: 100% !important;
`
const Div = styled.div`
  margin-bottom: 40px
`