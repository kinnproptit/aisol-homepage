import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/Logo.png'

export const Footer = () => {
  return (
    <Wrapper>
      <FooterTop className='container'>
        <Row className='row'>
          <FooterItem className='col-lg-3 col-md-3'>
            <HeaderItem>
              <img src={Logo} alt='' />
            </HeaderItem>
            <BodyItem noSpace>
              <Label>Công ty cổ phần Giải pháp trí tuệ nhân tạo AISOL</Label>
              <List>
                <Item noSpace>
                  <Span className='footer-primary-color'>Địa chỉ:</Span>{' '}
                  <Span>
                    Số 99, TT7.2, Khu tái định cư Phú Diễn, Nam Từ Liêm, Hà Nội
                  </Span>
                </Item>
                <Item noSpace>
                  <Span className='footer-primary-color'>Điện thoại:</Span>{' '}
                  <Span>0912.345.678</Span>
                </Item>
                <Item>
                  <Span className='footer-primary-color'>Email:</Span>{' '}
                  <Span>info@aisol.com.vn</Span>
                </Item>
              </List>
            </BodyItem>
          </FooterItem>
          <FooterItem className='col-lg-3 col-md-3'>
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
          <FooterItem className='col-lg-3 col-md-3'>
            <HeaderItem>
              <ItemLabel>Sản phẩm</ItemLabel>
            </HeaderItem>
            <BodyItem>
              <List>
                <Item>M-Care</Item>
              </List>
            </BodyItem>
          </FooterItem>
          <FooterItem className='col-lg-3 col-md-3'>
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
      <Copyright className='text-center'>Copyright 2020 AISOL</Copyright>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #05638f;
  font-family: 'Muli', sans-serif;
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
  font-weight: bold;
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
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
  font-weight: bold;
  font-size: 2rem;
`

const List = styled.ul``

const Item = styled.li`
  margin-bottom: ${props => (props.noSpace ? '0.8rem' : '2rem')};
  font-size: 1.5rem;
  list-style-type: none;
`

const Span = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

const Copyright = styled.div`
  background-color: #035177;
  padding: 1.2rem;
  color: white;
  font-size: 1.5rem;
  font-family: 'Muli', sans-serif;
`
