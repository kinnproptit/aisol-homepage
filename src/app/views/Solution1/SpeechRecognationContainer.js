import React, { useState } from 'react'
import { SocketRecognation } from './WebSocket'

export const SpeechRecognitionContainer = () => {
  const [state, setState] = useState({
    text: 'Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt giúp doanh nghiệp tự động hóa quá trình cung cấp sản phẩm dịch vụ, nâng cao hiệu quả hoạt động sản xuất kinh doanh. Giọng đọc nhân tạo Voice AI có ngữ điệu tự nhiên, đa dạng vùng miền, dễ dàng tích hợp với mọi hệ thống'
  })

  const props = {
    ...state,
    setState
  }

  // return <SocketRecognation {...props} />
  return <SocketRecognation {...props}/>
}
