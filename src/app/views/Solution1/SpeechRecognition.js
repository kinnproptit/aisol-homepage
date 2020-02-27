import React from 'react'
import styled from 'styled-components'

import iconRecord from '../../assets/ic_record.png'
import iconUpload from '../../assets/ic_upload.png'
import iconWave from '../../assets/ic_wave.png'

import Button from '../../Shared/components/Button/Button'
import ButtonOutline from '../../Shared/components/Button/ButtonOutline'

export const SpeechRecognition = ({
  text,
  onRecord
}) => {
  console.log("SpeechRecog render")
  return (
    <section className=''>
      <div className='margin-bottom-large'>
        <h1 className='application__heading text-center margin-bottom-medium advantage__heading'>
          Trải nghiệm
        </h1>
        <Wrapper className='container'>
          <Row className='row'>
            <Col className='col-lg-7 margin-bottom-medium'>
              <div className='button-controller'>
                <Button text='Ghi âm' icon={iconRecord} id="streaming-btn" onClick={onRecord} className2='margin-right-30 width-button-40'/>
                <Button text='Tải lên' icon={iconUpload} isMarginLeft className2='width-button-40'/>
                <ButtonOutline text='Mẫu file 1' icon={iconWave} id={1} />
                <ButtonOutline text='Mẫu file 2' icon={iconWave} id={2}/>
              </div>
              <Col>
                <div className='ux1-description-container'>
                  <p className='ux1-description'>{text}</p>
                </div>
              </Col>
            </Col>
            <Col className='col-lg-5 '>
              <Row className='margin-bottom-xs d-flex'>
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
              />
            </Col>
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
