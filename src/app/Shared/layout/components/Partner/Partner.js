import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import PartnerLogo from '../../../../assets/img_doitac5.svg'

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

  const parter = [...Array(10)].map((item, index) => {
    return <img src={PartnerLogo} alt='' key={index} />
  })

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
        {parter}
      </OwlCarousel>
    </section>
  )
}
