import React from 'react'

export const Application = ({ image, sectionTitle }) => {
  return (
    <section className='margin-bottom-large'>
      <h1 className='application__heading text-center margin-bottom-medium'>
        {sectionTitle}
      </h1>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={image} alt='' />
          </div>
          <div className='col-md-6'>
            <ul className='application__list'>
              <li className='application__item'>
                <h3 className='application__item__heading text-with-border-left'>
                  Thiết bị công nghệ thông minh
                </h3>
                <p className='application__item__description'>
                  Tích hợp vào các sản phẩm công nghệ thông minh, trở thành trợ
                  lý đắc lực cho người dùng trong cuộc sống
                </p>
              </li>
              <li className='application__item'>
                <h3 className='application__item__heading text-with-border-left'>
                  Thiết bị công nghệ thông minh
                </h3>
                <p className='application__item__description'>
                  Tích hợp vào các sản phẩm công nghệ thông minh, trở thành trợ
                  lý đắc lực cho người dùng trong cuộc sống
                </p>
              </li>
              <li className='application__item'>
                <h3 className='application__item__heading text-with-border-left'>
                  Thiết bị công nghệ thông minh
                </h3>
                <p className='application__item__description'>
                  Tích hợp vào các sản phẩm công nghệ thông minh, trở thành trợ
                  lý đắc lực cho người dùng trong cuộc sống
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
