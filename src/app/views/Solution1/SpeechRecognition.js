import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

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
  const recognitionRedux = useSelector(state => state.recognitionReducer)
  const { onSocket, connectedWs } = recognitionRedux

  return (
    <div className='button-fixes'>
      <Button
        text={connectedWs ? 'Dừng lại' : 'Ghi âm'}
        icon={iconRecord}
        className={connectedWs ? 'btn--red green_so1' : 'btn--green green_so1'}
        textCustom='text_green margin-left'
        buttonCustom='button_green'
        onClick={onRecord}
      />
    </div>
  )
}

export const SpeechRecognition = ({ onRecord }) => {
  let location = useLocation()
  const textRedux = useSelector(state => state.recognitionReducer.text)
  const [text, setText] = useState('')
  const [runningText, setRunningText] = useState(
    'Giải pháp tự động chuyển đổi văn bản thành tiếng nói Tiếng Việt giúp doanh nghiệp tự động hóa quá trình cung cấp sản phẩm dịch vụ, nâng cao hiệu quả hoạt động sản xuất kinh doanh. Giọng đọc nhân tạo Voice AI có ngữ điệu tự nhiên, đa dạng vùng miền, dễ dàng tích hợp với mọi hệ thống'
  )

  useEffect(() => {
    if (location.state && location.state.scroll) {
      document.getElementById('asr-demo').scrollIntoView()
    }
  }, [])

  // useEffect(() => {
  //   if (textRedux && textRedux.result) {
  //     setIsFinalState(textRedux.result.final)
  //   }
  // }, [])

  useEffect(() => {
    if (textRedux) {
      onChangeText(textRedux)
    }
  }, [textRedux])

  const onChangeText = message => {
    let clone_text = text
    let clone_running_text = runningText

    if (
      message.status == 0 &&
      message.result &&
      message.result.hypotheses.length > 0
    ) {
      // Shorthand of conditional operator
      let transcript =
        message.result.hypotheses[0].transcript_normed ||
        message.result.hypotheses[0].transcript
      let cache_text = transcript // decodeURI(
      //console.log(text);

      // Không nhận dạng được
      // if (cache_text == '<unk>.') {
      //   return
      // }

      if (cache_text.endsWith('.')) {
        // Xóa ký tự cuối cùng của xâu
        cache_text = cache_text.slice(0, -1)
      }
      if (message.result.final) {
        clone_text += clone_running_text + '. '
        clone_running_text = ''
      } else {
        clone_running_text = cache_text
      }
    } else if (message.status == 9) {
      // alert('Không có tài nguyên')
    }

    setText(clone_text)
    setRunningText(clone_running_text)
  }

  return (
    <section id='asr-demo'>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          Trải nghiệm
        </h1>
        <Wrapper className='container'>
          <div className='row'>
            {/* <ButtonShowing onRecord={onRecord} /> */}
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
                  <DangerousHTML
                    htmlString={
                      text + '<span class="temp">' + runningText + '</span>'
                    }
                  />
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
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

const Wrapper = styled.div``

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
