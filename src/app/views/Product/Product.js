import React from 'react'
import { Technique } from '../../Shared/components/Technique/Technique'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import AppImage1 from '../assets/img_ungdung.svg'

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
  return (
    <React.Fragment>
      <Application sectionTitle='Lợi ích' image={AppImage1} data={data} />
      <Advantages />
      <Technique />
    </React.Fragment>
  )
}
