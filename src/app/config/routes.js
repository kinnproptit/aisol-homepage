import React from 'react'
import loadable from '@loadable/component'

import { LoadingIndicator } from 'ui'

const AsyncPage = loadable(props => import(`../views/${props.component}`), {
  fallback: LoadingIndicator
})

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <AsyncPage component='Home' />,
    title: 'Homepage'
  },
  {
    path: '/demo',
    exact: true,
    component: () => <AsyncPage component='Demo' />,
    title: 'Demo'
  },
  {
    path: '/404.html',
    exact: true,
    component: () => <AsyncPage component='404' />
  }
]
export default routes
