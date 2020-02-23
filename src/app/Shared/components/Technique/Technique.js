import React from 'react'
import styled from 'styled-components'

export const Technique = ({ data = [] }) => {
  const techniqueItem = data.map(({ image, content }) => (
    <Item className='technique-item'>
      <InsideItem className='d-flex flex-column align-items-center flex-row-reverse'>
        <Img className='margin-bottom-big' src={image} alt='' />
        <p>{content}</p>
      </InsideItem>
    </Item>
  ))

  return (
    <section className='border--top'>
      <div className='technique container margin-bottom-large'>
        <H1 className='text-center advantage__heading margin-bottom-big'>
          Công nghệ
        </H1>
        <div className='technique-grid'>{techniqueItem}</div>
      </div>
    </section>
  )
}

const H1 = styled.h1``

const Item = styled.div`
  flex: 1;
`

const Img = styled.img`
  max-width: 12.8rem;
  max-height: 12.8rem;
`

const InsideItem = styled.div`
  padding: 2.5rem 1.5rem;
`
