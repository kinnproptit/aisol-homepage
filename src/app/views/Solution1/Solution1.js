import React from 'react'

import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'
import { SpeechRecognition } from '../../Shared/components/Experiences/SpeechRecognition'
import ExperienceView from './Experience'

import AppImage1 from '../assets/img_ungdung.svg'

import Ad1 from '../assets/Shape 11.svg'
import Ad2 from '../assets/Shape 11.svg'
import Ad3 from '../assets/Shape 11.svg'

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

  const AdvantagesData = [
    {
      image: Ad1,
      title: 'Tự động phân loại',
      content:
        'Tự động phân loại các cuộc gọi theo chủ đề, sản phẩm, dịch vụ, gói cước điện thoại khu vực. Giúp phân tích đưa ra định hướng kinh doanh'
    },
    {
      image: Ad2,
      title: 'Chính xác',
      content: 'Hoạt động chính xác với tất cả các giọng vùng miền của Việt Nam'
    },
    {
      image: Ad3,
      title: 'Nhận dạng viết tắt',
      content:
        'Có khả năng nhận dạng những từ viết tắt, tên dịch vụ/ sản phẩm như: mobiletv, funring, mgame, mcare, facebook...'
    }
  ]

  return (
    <React.Fragment>
      <div className='bg-second-cl'>
        <ExperienceView />
        <SpeechRecognition />
      </div>

      <Advantages data={AdvantagesData} />
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
