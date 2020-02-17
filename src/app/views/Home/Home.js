import React from 'react'

import { Solution } from './components/Solution'
import { MCare } from './components/MCare'

import sol1 from '../assets/sol1.svg'
import sol2 from '../assets/sol2.png'

export const Home = () => {
  const HomepageSolutionIntro = [
    {
      title: 'NHẬN DẠNG TIẾNG NÓI',
      description:
        'Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt, đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường',
      image: sol1
    },
    {
      title: 'TỔNG HỢP TIẾNG NÓI',
      description:
        'Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt với giọng điệu tự nhiên, hay và dễ dàng tích hợp với mọi hệ thống',
      image: sol2
    }
  ].map((data, index) => {
    const { title, description, image } = data
    const id = index + 1

    return (
      <Solution title={title} description={description} image={image} id={id} />
    )
  })

  return (
    <React.Fragment>
      <MCare />
      <div className='margin-bottom-large'>{HomepageSolutionIntro}</div>
    </React.Fragment>
  )
}
