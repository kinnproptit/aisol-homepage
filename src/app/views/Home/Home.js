import React from 'react'
import loadable from '@loadable/component'

import { LoadingIndicator } from '../../../packages/ui'

// import { Solution } from './components/Solution'
// import { Solution2 } from './components/Solution2'
// import { MCare } from './components/MCare'

import sol1 from '../../assets/homepage_intro1.png'
import sol2 from '../../assets/bg_blue.png'

const Solution = loadable(() => import('./components/Solution'), {
  fallback: LoadingIndicator
})

const Solution2 = loadable(() => import('./components/Solution2'), {
  fallback: LoadingIndicator
})

const MCare = loadable(() => import('./components/MCare'), {
  fallback: LoadingIndicator
})

export const Home = () => {
  return (
    <React.Fragment>
      <div className='margin-bottom-large'>
        <Solution
          title='NHẬN DẠNG TIẾNG NÓI'
          description='Giải pháp tự động chuyển đổi tiếng nói thành văn bản Tiếng Việt, đạt độ chính xác lên tới 96% và nhận dạng được tất cả môi trường'
          image={sol1}
        />
        <Solution2
          title='TỔNG HỢP TIẾNG NÓI'
          description='Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt với giọng điệu tự nhiên, hay và dễ dàng tích hợp với mọi hệ thống'
          image={sol2}
        />
      </div>
      <MCare />
    </React.Fragment>
  )
}
