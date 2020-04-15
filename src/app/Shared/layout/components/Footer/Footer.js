import React from 'react'
import styled from 'styled-components'

// import Logo from '../../../../assets/AISOL-2.png'
import Logo from '../../../../assets/par.png'

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop className='container'>
        <Row className='row'>
          <FooterItem className='col-lg-3 col-md-3 order-4 order-md-1 '>
            <HeaderItem>
              <Img src={Logo} alt='' />
            </HeaderItem>
            <BodyItem noSpace>
              <Label>CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ COMGATE</Label>
              <List>
                <Item noSpace>
                  <Span className='footer-primary-color'>Địa chỉ:</Span>{' '}
                  <Span>
                    Số 99, TT7.2, Khu tái định cư Phú Diễn, Nam Từ Liêm, Hà Nội
                  </Span>
                </Item>
                <Item noSpace>
                  <Span className='footer-primary-color'>Điện thoại:</Span>{' '}
                  <Span>0966.688.883 | 0948.860.868</Span>
                </Item>
                <Item>
                  <Span className='footer-primary-color'>Email:</Span>{' '}
                  <Span>info@comgate.com.vn</Span>
                </Item>
              </List>
            </BodyItem>
          </FooterItem>
          <FooterItem className='col-lg-3 col-md-3 order-1 order-md-2'>
            <HeaderItem>
              <ItemLabel>Giải pháp của chúng tôi</ItemLabel>
            </HeaderItem>
            <BodyItem>
              <List>
                <Item>Nhận dạng tiếng nói</Item>
                <Item>Tổng hợp tiếng nói</Item>
              </List>
            </BodyItem>
          </FooterItem>
          <FooterItem className='col-lg-3 col-md-3 order-2 order-md-3'>
            <HeaderItem>
              <ItemLabel>Sản phẩm</ItemLabel>
            </HeaderItem>
            <BodyItem>
              <List>
                <Item>M-Care</Item>
                <Item>Sách nói</Item>
              </List>
            </BodyItem>
          </FooterItem>
          <FooterItem className='col-lg-3 col-md-3 order-3 order-md-4'>
            <HeaderItem>
              <ItemLabel>Tài liệu kỹ thuật</ItemLabel>
            </HeaderItem>
            <BodyItem>
              <List>
                <Item>Nhận dạng tiếng nói</Item>
                <Item>Tổng hợp tiếng nói</Item>
                <Item>M-Care</Item>
              </List>
            </BodyItem>
          </FooterItem>
        </Row>
      </FooterTop>
      <Copyright className='text-center'>Copyright 2020 COMGATE</Copyright>
    </Wrapper>
  )
}

export default Footer

const Img = styled.img`
  width: 80px;
`

const Wrapper = styled.div`
  background-color: #05638f;
`

const FooterTop = styled.div`
  color: #ffffff;
`

const Row = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 3rem;
  // line-height: 1.5rem;
`

const FooterItem = styled.div``

const Label = styled.h2`
  color: #a0feea;
  font-weight: 400;
  margin-bottom: 1.2rem;
  font-size: 18px;
`

const HeaderItem = styled.div`
  margin-bottom: 2.5rem;
`

const BodyItem = styled.div`
  margin-top: ${props => (props.noSpace ? '0px' : '4rem')};
`

const ItemLabel = styled.h2`
  margin-top: 4rem;
  color: #a0feea;
  font-weight: 400;
  font-size: 20px;
`

const List = styled.ul``

const Item = styled.li`
  margin-bottom: ${props => (props.noSpace ? '0.8rem' : '2rem')};
  font-size: 15px;
  list-style-type: none;
`

const Span = styled.span`
  font-weight: bold;
  font-size: 15px;
`

const Copyright = styled.div`
  background-color: #035177;
  padding: 1.2rem;
  color: white;
  font-size: 15px;
  font-family: 'Muli', sans-serif;
`
