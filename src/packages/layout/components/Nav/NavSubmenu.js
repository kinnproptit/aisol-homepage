import React from 'react'

import cn from 'classnames'

export const NavSubmenu = ({ className, children }) => {
  const classes = cn({ nav: true, 'nav-submenu': true }, className)
  return <div className={classes}>{children}</div>
}
