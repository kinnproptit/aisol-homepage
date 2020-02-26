import React from 'react'

import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'
import { SpeechRecognitionContainer } from './SpeechRecognationContainer'

import AppImage1 from '../../assets/giaiphap1_ungdung.png'

import Ad1 from '../../assets/solution2_img1.png'
import Ad2 from '../../assets/solution2_img2.png'
import Ad3 from '../../assets/solution2_img3.png'

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
      title: 'Độ chính xác cao',
      content:
        'Việc sử dụng các công nghệ tiên tiến trên thế giới như mạng nơron sâu kết hợp với các giải pháp cho đặc thù tiếng Việt, dịch vụ nhận dạng tiếng nói của chúng tôi cho kết quả nhận dạng với độ chính xác lên tới 96%'
    },
    {
      image: Ad2,
      title: 'Chịu tải cao',
      content:
        'Có thể đáp ứng tải lên tới hàng nghìn audio đầu vào tại cùng 1 thời điểm'
    },
    {
      image: Ad3,
      title: 'Linh hoạt cao',
      content:
        'Nhận dạng được tất cả các đầu vào khác nhau, như cuộc gọi ghi âm tổng đài hay dữ liệu ghi âm. Có khả năng dễ dàng tùy chỉnh theo các lĩnh vực khác nhau'
    }
  ]

  return (
    <React.Fragment>
      <div className='bg-second-cl'>
        <SpeechRecognitionContainer />
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
