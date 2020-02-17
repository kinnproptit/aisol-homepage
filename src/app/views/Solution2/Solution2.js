import React from 'react'

import { SpeechSynthesis } from '../../Shared/components/Experiences/SpeechSynthesis'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import { Mp3Experience } from './components/Experience'

import AppImage1 from '../assets/img_ungdung.svg'

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
  return (
    <React.Fragment>
      <Mp3Experience />
      <SpeechSynthesis />
      <Advantages />
      <Application
        sectionTitle='Ứng dụng thực tế'
        image={AppImage1}
        data={data}
      />
    </React.Fragment>
  )
}
