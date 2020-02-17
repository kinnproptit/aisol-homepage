import React from 'react'
import styled from 'styled-components'

import TechniqueImage from '../../assets/Technique.svg'

export const Technique = () => {
  const techniqueItem = [...Array(4)].map(e => {
    return (
      <div className='col-md-3'>
        <div className='technique-item d-flex flex-column align-items-center'>
          <img className='margin-bottom-big' src={TechniqueImage} alt='' />
          <p>
            Sử dụng công nghệ nhận dạng tiếng nói (Speech-to-text) tiếng Việt để
            chuyển toàn bộ nội dung cuộc gọi sang văn bản
          </p>
        </div>
      </div>
    )
  })

  return (
    <section className='border--top'>
      <div className='technique container margin-bottom-large'>
        <H1 className='text-center advantage__heading margin-bottom-big'>
          Công nghệ
        </H1>
        <div className='row'>{techniqueItem}</div>
      </div>
    </section>
  )
}

const H1 = styled.h1``
