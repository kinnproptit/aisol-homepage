import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import iconRecord from '../../assets/ic_record.png'
import iconUpload from '../../assets/ic_upload.png'
import iconWave from '../../assets/ic_wave.png'

import Button from '../../Shared/components/Button/Button'
import ButtonOutline from '../../Shared/components/Button/ButtonOutline'

const createMarkup = htmlString => {
  return { __html: htmlString }
}

const DangerousHTML = ({ htmlString }) => {
  return (
    <div
      className='ux1-description'
      dangerouslySetInnerHTML={createMarkup(htmlString)}
    />
  )
}

const ButtonShowing = ({ onRecord }) => {
  const connectedWs = useSelector(state => state.recognitionReducer.connectedWs)
  return (
    <Button
      text='Ghi âm'
      icon={iconRecord}
      className={connectedWs ? 'btn--red' : 'btn--green'}
      textCustom='text_green margin-left'
      buttonCustom='button_green'
      onClick={onRecord}
    />
  )
}

export const SpeechRecognition = ({ onRecord }) => {
  const textRedux = useSelector(state => state.recognitionReducer.text)
  console.log(textRedux)
  const [text, setText] = useState(textRedux)

  // useEffect(() => {
  //   // setText(textRedux)
  // }, [textRedux])

  return (
    <section className=''>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          Trải nghiệm
        </h1>
        <Wrapper className='container'>
          <Row className='row'>
            <Col className='col-lg-12 margin-bottom-medium main_so1'>
              <div className='button-controller solution_1'>
                <ButtonShowing onRecord={onRecord} />
                {/* <Button
                  text='Tải lên'
                  icon={iconUpload}
                  className='btn--green green margin-left'
                  isMarginLeft
                  textCustom='text_green'
                  buttonCustom='button_green'
                />
                <ButtonOutline
                  text='Mẫu file 1'
                  icon={iconWave}
                  id={1}
                  classNameCss=' white'
                  buttonCustom='button_white'
                  textCustom='text_white'
                />
                <ButtonOutline
                  text='Mẫu file 2'
                  icon={iconWave}
                  id={2}
                  classNameCss=' white'
                  buttonCustom='button_white'
                  textCustom='text_white'
                /> */}
              </div>
              <Col>
                <div className='ux1-description-container'>
                  {/* <DangerousHTML htmlString={textRedux} /> */}
                </div>
              </Col>
            </Col>
            {/* <Col className='col-lg-5 '> */}
            {/* <Row className='margin-bottom-xs d-flex'>
                <Input placeHolder='Enter Video URL' className='input' />
                <button className='btn btn-danger ux1-play-btn'>Play</button>
              </Row>
              <iframe
                className='youtube'
                src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              /> */}
            {/* </Col> */}
          </Row>
        </Wrapper>
      </div>
    </section>
  )
}

const Wrapper = styled.div``

const Row = styled.div`
  margin-bottom: 2rem;
`

const Intro = styled.p`
  margin-top: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 50vh;
  clip-path: polygon(
    0% 15%,
    0 0,
    15% 0%,
    85% 0%,
    85% 15%,
    100% 15%,
    85% 37%,
    85% 85%,
    85% 100%,
    15% 100%,
    0 100%,
    0% 85%
  );
`

const Input = styled.input`
  width: 70%;
  border-radius: 7.38px;
  outline: none;
  border: none;
`

const Col = styled.div``
