import React from 'react'
import { Provider } from 'react-redux'
import loadable from '@loadable/component'

import ReactDOM from 'react-dom'

import store from './app/redux'
import * as serviceWorker from './serviceWorker'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import 'antd/dist/antd.css'
import './packages/css/main.css'

import { LoadingIndicator } from './packages/ui'
import { Preloader } from './app/Preloader'

const App = loadable(() => import('./app'), {
  fallback: LoadingIndicator
})

ReactDOM.render(
  <Provider store={store}>
    <Preloader>
      <App />
    </Preloader>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
