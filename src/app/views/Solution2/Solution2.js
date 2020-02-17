import React from 'react'

import { SpeechSynthesis } from '../../Shared/components/Experiences/SpeechSynthesis'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import AppImage1 from '../assets/img_ungdung.svg'

export const Solution2 = () => {
  return (
    <React.Fragment>
      <SpeechSynthesis />
      <Advantages />
      <Application sectionTitle='Ứng dụng thực tiễn' image={AppImage1} />
    </React.Fragment>
  )
}
