import React from 'react'

import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'
import { SpeechRecognition } from '../../Shared/components/Experiences/SpeechRecognition'

import AppImage1 from '../assets/img_ungdung.svg'
import ExperienceView from './Experience'

export const Solution1 = () => {
  const data = [
    {
      title: 'Thiết bị công nghệ thông minh',
      content:
        'Tích hợp vào các sản phẩm công nghệ thông minh, trở thành trợ lý đắc lực cho người dùng trong cuộc sống'
    },
    {
      title: 'Ghi âm phỏng vấn, hội thảo',
      content:
        'Hỗ trợ phóng viên và các đơn vị, tổ chức có nhu cầu bóc tách băng ghi âm, ghi âm tại hội thảo, họp báo hay trong các cuộc phỏng vấn'
    },
    {
      title: 'Hệ thống khám chữa bệnh',
      content:
        'Tích hợp vào các sản phẩm, dịch vụ tại các cơ sở y tế, giúp tiết kiệm nguồn nhân lực, thời gian và cải thiện chất lượng dịch vụ'
    }
  ]

  return (
    <React.Fragment>
      <div className='bg-second-cl'>
        <ExperienceView />
        <SpeechRecognition />
      </div>

      <Advantages />
      <div className='bg-second-cl2'>
        <Application
          sectionTitle='Ứng dụng thực tế'
          image={AppImage1}
          data={data}
        />
      </div>
    </React.Fragment>
  )
}
