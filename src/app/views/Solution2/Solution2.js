import React from 'react'

import { SpeechSynthesis } from '../../Shared/components/Experiences/SpeechSynthesis'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import { Mp3Experience } from './components/Experience'

import AppImage1 from '../assets/img_ungdung.svg'

export const Solution2 = () => {
  const data = [
    {
      title: '',
      content: ''
    },
    {
      title: '',
      content: ''
    },
    {
      title: '',
      content: ''
    }
  ]
  return (
    <React.Fragment>
      <Mp3Experience />
      <SpeechSynthesis />
      <Advantages />
      <Application
        sectionTitle='Ứng dụng thực tiễn'
        image={AppImage1}
        data={data}
      />
    </React.Fragment>
  )
}
