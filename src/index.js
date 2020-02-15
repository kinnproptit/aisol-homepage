import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import loadable from '@loadable/component'

import store from './app/redux'
import { Preloader } from './app/Preloader'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
// import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
import './index.css'
import './packages/css/main.css'

import { LoadingIndicator } from 'ui'

const AppComponent = loadable(() => import('./app'), {
  fallback: LoadingIndicator
})

render(
  <Provider store={store}>
    <Preloader>
      <AppComponent />
    </Preloader>
  </Provider>,
  document.querySelector('#app')
)
