import React from 'react'

export const Application = ({ image, sectionTitle, data = [] }) => {
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
              {data.map(({ title, content }) => (
                <li className='application__item'>
                  <h3 className='application__item__heading text-with-border-left'>
                    {title}
                  </h3>
                  <p className='application__item__description'>{content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
