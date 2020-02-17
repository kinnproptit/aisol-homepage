import React from 'react'
import { Technique } from '../../Shared/components/Technique/Technique'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import AppImage1 from '../assets/img_ungdung.svg'

export const Product = () => {
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
      <Application
        sectionTitle='Ứng dụng thực tiễn'
        Image={AppImage1}
        data={data}
      />
      <Advantages />
      <Technique />
    </React.Fragment>
  )
}
