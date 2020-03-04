import * as Actions from '../action-types'

const initialState = {
  ws: null,
  audioData: null,
  connectedWs: null,
  text: 'Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt giúp doanh nghiệp tự động hóa quá trình cung cấp sản phẩm dịch vụ, nâng cao hiệu quả hoạt động sản xuất kinh doanh. Giọng đọc nhân tạo Voice AI có ngữ điệu tự nhiên, đa dạng vùng miền, dễ dàng tích hợp với mọi hệ thống'
}

const recognitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_SOCKET:
      return {
        ...state,
        ws: action.payload
      }
    case Actions.GET_AUDIO:
      return {
        ...state,
        audioData: action.payload
      }
    case Actions.GET_CONNECTED_WS:
      return {
        ...state,
        connectedWs: action.payload
      }
    case Actions.GET_TEXT:
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}

export default recognitionReducer
