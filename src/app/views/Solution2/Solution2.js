import React from 'react'

import { SpeechSynthesis } from '../../Shared/components/Experiences/SpeechSynthesis'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import { Mp3Experience } from './components/Experience'

import AppImage1 from '../../assets/giaiphap1_ungdung.png'

// import Ad1 from '../assets/Shape 11.svg'
// import Ad2 from '../assets/Shape 11.svg'
// import Ad3 from '../assets/Shape 11.svg'

export const Solution2 = () => {
  const data = [
    {
      title: 'Tổng đài tự động',
      content:
        'Tích hợp vào các tổng đài tự động để gọi cho khách hàng với mục đích truyền thông các nội dung bằng văn bản theo kịch bản'
    },
    {
      title: 'Đọc báo điện tử',
      content:
        'Hỗ trợ độc giả có thể nghe các bài báo điện tử trên các website thay vì phải đọc chữ như truyền thống'
    },
    {
      title: 'MC Ảo và Thuyết minh phim',
      content:
        'Tích hợp vào các kênh truyền hình với vai trò làm MC Ảo hoặc Thuyết minh phụ đề phim. Giúp giảm thời gian, chi phí nhân sự cho các công việc này và tăng hiệu quả công việc'
    }
  ]

  const AdvantagesData = [
    {
      image: 'Ad1',
      title: 'Tự động phân loại',
      content:
        'Tự động phân loại các cuộc gọi theo chủ đề, sản phẩm, dịch vụ, gói cước điện thoại khu vực. Giúp phân tích đưa ra định hướng kinh doanh'
    },
    {
      image: 'Ad2',
      title: 'Chính xác',
      content: 'Hoạt động chính xác với tất cả các giọng vùng miền của Việt Nam'
    },
    {
      image: 'Ad3',
      title: 'Nhận dạng viết tắt',
      content:
        'Có khả năng nhận dạng những từ viết tắt, tên dịch vụ/ sản phẩm như: mobiletv, funring, mgame, mcare, facebook...'
    }
  ]

  return (
    <React.Fragment>
      <div className='bg-second-cl'>
        <Mp3Experience />
        <SpeechSynthesis />
      </div>
      <Advantages data={AdvantagesData} />
      <div className='bg-second-cl'>
        <Application
          sectionTitle='Ứng dụng thực tế'
          image={AppImage1}
          data={data}
        />
      </div>
    </React.Fragment>
  )
}
