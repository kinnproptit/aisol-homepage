import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { withNormalLayout } from './Shared/layout'

import { PrivateRoute } from './Shared/components/PrivateRoute'
import { routes } from './config/routes'
import { Preloader } from './Preloader'

const App = () => {
  return (
    <Router>
      <Preloader>
      <Switch>
        {routes.map((route, index) => {
          switch (true) {
            case route.redirect:
              const { redirect, ...props } = route
              return <Redirect key={index} {...props} />
            case route.isPrivate: {
              const { path, exact = false, title = false, component } = route
              return (
                <PrivateRoute
                  key={index}
                  path={path}
                  exact={exact}
                  component={withNormalLayout(component, { title })}
                />
              )
            }
            default: {
              const { path, exact = false, title = false, component } = route
              return (
                <Route
                  key={index}
                  path={path}
                  exact={exact}
                  component={withNormalLayout(component, { title })}
                />
              )
            }
          }
        })}
        <Redirect to='/404.html' />
      </Switch>
      </Preloader>
    </Router>
  )
}

export default App
