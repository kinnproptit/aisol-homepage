import React from 'react'
import { Technique } from '../../Shared/components/Technique/Technique'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

import AppImage1 from '../assets/img_ungdung.svg'

export const Product = () => {
  return (
    <React.Fragment>
      <Application sectionTitle='Ứng dụng thực tiễn' Image={AppImage1} />
      <Advantages />
      <Technique />
    </React.Fragment>
  )
}
