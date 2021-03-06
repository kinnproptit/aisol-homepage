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
    component: () => <AsyncPage component='Home' />,
    title: 'Homepage'
  },
  {
    path: enviroments.linkToASR,
    exact: true,
    component: () => <AsyncPage component='Solution1' />,
    title: 'Solution'
  },
  {
    path: enviroments.linkToTTS,
    exact: true,
    component: () => <AsyncPage component='Solution2' />,
    title: 'Solution'
  },
  {
    path: enviroments.linkToOCR,
    exact: true,
    component: () => <AsyncPage component='OCR' />,
    title: 'OCR'
  },
  {
    path: enviroments.linkToContact,
    exact: true,
    component: () => <AsyncPage component='Contact' />,
    title: 'Contact'
  },
  {
    path: enviroments.linkToProduct,
    exact: true,
    component: () => <AsyncPage component='Product' />,
    title: 'Products'
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
    title: 'Boook'
  }
]
export default routes
