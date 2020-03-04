import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import PartnerLogo from '../../../../assets/img_doitac5.svg'

import dt1 from '../../../../assets/dt1.png'
import dt2 from '../../../../assets/dt2.png'
import dt3 from '../../../../assets/dt3.png'
import dt4 from '../../../../assets/dt4.png'
import dt5 from '../../../../assets/dt5.png'


export const Partner = () => {
  const options = {
    loop: true,
    center: true,
    margin: 20,
    dots: false,
    autoplay: true,
    responsive: {
      0: { items: 3 },
      768: { items: 3 },
      1170: { items: 6 }
    }
  }

  // const parter = [...Array(10)].map((item, index) => {
  //   return <img src={PartnerLogo} alt='' key={index} />
  // })

  return (
    <section className='partner margin-bottom-large'>
      <h1 className='partner__heading margin-bottom-mediu'>Đối tác</h1>
      <OwlCarousel
        {...options}
        className='owl-theme container'
        loop
        margin={10}
        nav
        key={`owl-carousel-${Math.random()}`}
      >
        <img src={dt1} alt='' />
        <img src={dt2} alt='' />
        <img src={dt3} alt='' />
        <img src={dt4} alt='' />
        <img src={dt5} alt='' />
      </OwlCarousel>
    </section>
  )
}
