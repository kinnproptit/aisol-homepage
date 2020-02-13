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
    path: '/solution1.html',
    exact: true,
    component: () => <AsyncPage component='Solution1' />,
    title: 'Solution'
  },
  {
    path: '/solution2.html',
    exact: true,
    component: () => <AsyncPage component='Solution2' />,
    title: 'Solution'
  },
  {
    path: '/contact.html',
    exact: true,
    component: () => <AsyncPage component='Contact' />,
    title: 'Contact'
  },
  {
    path: '/product.html',
    exact: true,
    component: () => <AsyncPage component='Product' />,
    title: 'Products'
  },
  {
    path: '/404.html',
    exact: true,
    component: () => <AsyncPage component='404' />
  }
]
export default routes
