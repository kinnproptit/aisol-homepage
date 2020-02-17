import React from 'react'
import styled from 'styled-components'

import iconRecord from '../assets/ic_record.png'
import iconUpload from '../assets/ic_upload.png'
import iconWave from '../assets/ic_wave.png'
import demo from '../assets/demo.png'

import Button from '../../Shared/components/Button/Button'
import ButtonOutline from '../../Shared/components/Button/ButtonOutline'

const ExperienceView = () => {
  return (
    <Wrapper className='container'>
      <Row className='row'>
        <Button text='Ghi âm' icon={iconRecord} />
        <Button text='Tải lên' icon={iconUpload} />
        <ButtonOutline text='Mẫu file 1' icon={iconWave} />
        <ButtonOutline text='Mẫu file 2' icon={iconWave} />
      </Row>
      <Row className='row'>
        <Col className='col-sm'>
          <Intro>
            Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt giúp
            doanh nghiệp tự động hóa quá trình cung cấp sản phẩm dịch vụ, nâng
            cao hiệu quả hoạt động sản xuất kinh doanh. Giọng đọc nhân tạo Voice
            AI có ngữ điệu tự nhiên, đa dạng vùng miền, dễ dàng tích hợp với mọi
            hệ thống
          </Intro>
        </Col>
        <Col className='col-sm'>
          <Row className='row'>
            <Input placeHolder='URL' className='input' />
            <button className='btn btn-danger'>
              <p>Play</p>
            </button>
          </Row>
          <img src={demo} />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default ExperienceView

const Wrapper = styled.div`
  padding: 10px;
`

const Row = styled.div``

const Intro = styled.p`
  margin-top: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
`

const Input = styled.input`
  height: 50px;
  width: 70%;
  border-radius: 10px;
  border-color: gray;
  border-width: 1px;
`

const Col = styled.div``
