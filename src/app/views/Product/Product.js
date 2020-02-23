import React from 'react'
import { Technique } from '../../Shared/components/Technique/Technique'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import ApplicationProduct from '../../assets/applicationProduct.svg'

import First from '../../assets/first.svg'
import Second from '../../assets/second.svg'
import Third from '../../assets/third.svg'
import Fourth from '../../assets/fourth.svg'

import Ad1 from '../../assets/giaiphap2_ad2.png'
import Ad2 from '../../assets/giaiphap2_ad2.png'
import Ad3 from '../../assets/giaiphap2_ad2.png'

export const Product = () => {
  const data = [
    {
      title: 'Nâng cao chất lượng CSKH',
      content:
        'Giám sát được toàn bộ hoạt động và nội dung cuộc đàm thoại giữa điện thoại viên với khách hàng',
      subcontent: 'Nâng cao chất lượng đội ngũ điện thoại viên'
    },
    {
      title: 'Phát hiện nhanh các cuộc gọi "Bất thường"',
      content: 'Xác định thái độ người gọi và điện thoại viên',
      subcontent: 'Bắt được diễn biến và xu hướng của các cuộc gọi'
    },
    {
      title: 'Định hướng chiến lược kinh doanh hiệu quả',
      content:
        'Tự động phân loại các cuộc gọi theo chủ đề, sản phẩm, dịch vụ, gói cước, điện thoại viên, khu vực',
      subcontent:
        'Giúp phân tích để đưa ra định hướng kinh doanh nhanh và hiệu quả'
    },
    {
      title: 'Tối ưu chi phí',
      content: 'Tối ưu nguồn nhân lực và chi phí vận hành',
      subcontent: 'Giảm thời gian hậu kiểm và đánh giá bộ máy CSKH'
    }
  ]

  const TechniqueData = [
    {
      content:
        'Sử dụng công nghệ nhận dạng tiếng nói (Speech-to-text) tiếng Việt để chuyển toàn bộ nội dung cuộc gọi sang văn bản',
      image: First
    },
    {
      content:
        'Sử dụng công nghệ nhận dạng ngữ điệu (Speech emotion) để đánh giá ngữ điệu tiếng nói của khách hàng',
      image: Second
    },
    {
      content:
        'Sử dụng công nghệ khai phá dữ liệu (Data Mining) để lấy được nội dung từ văn bản, kết hợp với ngữ điệu khách hàng để đánh giá độ hài lòng và phân tích toàn bộ hoạt động CSKH',
      image: Third
    },
    {
      content:
        'Giao diện trên nền website, wapsite giúp người quản lý có thể nhanh chóng giám sát và có các báo cáo trực quan ở bất kì đâu, bất kì thời điểm nào',
      image: Fourth
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
      <Application
        sectionTitle='Lợi ích'
        image={ApplicationProduct}
        data={data}
      />
      <Advantages data={AdvantagesData} />
      <Technique data={TechniqueData} />
    </React.Fragment>
  )
}
