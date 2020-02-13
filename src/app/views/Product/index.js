import React from 'react'
import { Technique } from '../../Shared/components/Technique/Technique'
import { Advantages } from '../../Shared/components/Advantages/Advantages'
import { Application } from '../../Shared/components/Application/Application'

const Product = () => {
  return (
    <React.Fragment>
      <Application />
      <Advantages />
      <Technique />
    </React.Fragment>
  )
}

export default Product
