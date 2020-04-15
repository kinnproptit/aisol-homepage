import React from 'react'
import loadable from '@loadable/component'

import enviroments from '../../environments'
import { LoadingIndicator } from '../../packages/ui'

const AsyncPage = loadable(props => import(`../views/${props.component}`), {
  fallback: LoadingIndicator
})

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <AsyncPage component='Book' />,
    title: 'Book'
  },
  {
    path: enviroments.linkToErrorPage,
    exact: true,
    component: () => <AsyncPage component='404' />
  },
  {
    path: enviroments.linkToBook,
    exact: true,
    component: () => <AsyncPage component='Book' />,
    title: 'Book'
  }
]
export default routes
