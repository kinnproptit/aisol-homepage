import React from 'react'
import cn from 'classnames'

import { Icon } from 'tabler-react'

export const NavSubmenuItem = ({
  className,
  RootComponent,
  icon,
  children,
  active = false,
  to
}) => {
  const classes = cn({ 'nav-item': true, active: active }, className)
  const Component = RootComponent || 'a'
  return (
    <Component className={classes} to={to}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{' '}
        </React.Fragment>
      )}
      {children}
    </Component>
  )
}
