import React from 'react'

import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'
import { SpeechRecognition } from '../../Shared/components/Experiences/SpeechRecognition'

import AppImage1 from '../assets/img_ungdung.svg'
import ExperienceView from './Experience'

export const Solution1 = () => {
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
      <ExperienceView />
      <SpeechRecognition />
      <Advantages />
      <Application
        sectionTitle='Ứng dụng thực tế'
        image={AppImage1}
        data={data}
      />
    </React.Fragment>
  )
}
