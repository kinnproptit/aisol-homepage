import React from 'react'
import styled from 'styled-components'
import loadable from '@loadable/component'

import { ErrorBoundary, LoadingIndicator } from '../../../../../packages/ui'

const Header = loadable(() => import('../Header'), {
  fallback: LoadingIndicator
})

const Footer = loadable(() => import('../Footer/Footer'), {
  fallback: LoadingIndicator
})

const Partner = loadable(() => import('../Partner/Partner'), {
  fallback: LoadingIndicator
})

export const NormalLayout = ({
  title = false,
  children
  //   ...props
}) => {
  return (
    <ContentContainer>
      <ErrorBoundary>
        <Header />
        <div id='main-page'>{children}</div>
        <Partner />
        <Footer />
      </ErrorBoundary>
    </ContentContainer>
  )
}

export const withNormalLayout = (WrappedComponent, layoutProps) => {
  return props => (
    <NormalLayout {...layoutProps} match={props.match}>
      <WrappedComponent {...props} />
    </NormalLayout>
  )
}

const ContentContainer = styled.div`
  //   display: flex;
  //   flex-direction: row;
  //   max-width: 100%;
  //   width: 100%;
  //   height: 100%;
`

// const NormalLayoutWrapper = styled.div`
//   padding: 32px 40px;
//   display: flex;
//   flex-direction: ${props => (props.column ? 'column' : 'row')};
//   width: 100%;
//   height: 100%;
//   background: #cfd8dc;
//   overflow: auto;
// `

// const ContentWrapper = styled.div`
//   flex: 0 1 auto;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   min-width: 0px;
// `

// const Heading = styled()``
