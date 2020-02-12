import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import loadable from '@loadable/component'

import store from './app/redux'
import { Preloader } from './app/Preloader'

import './reset.css'
import './index.css'

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
