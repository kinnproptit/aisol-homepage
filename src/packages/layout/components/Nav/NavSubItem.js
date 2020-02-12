import React from 'react'
import { Dropdown } from 'tabler-react'

export const NavSubItem = ({
  children,
  LinkComponent,
  className,
  to,
  icon,
  hasSubNav,
  value,
  useExact
}) => {
  return (
    <Dropdown.Item
      to={to}
      icon={icon}
      RootComponent={LinkComponent}
      useExact={useExact || false}
    >
      {value || children}
    </Dropdown.Item>
  )
}
