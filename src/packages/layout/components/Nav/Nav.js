import React from 'react'
import cn from 'classnames'

import { NavItem } from './NavItem'

export class Nav extends React.Component {
  state = {
    pathName: null
  }

  static Item = NavItem
  static SubItem = NavSubItem
  static Link = NavLink
  static Submenu = NavSubmenu
  static SubmenuItem = NavSubmenuItem

  routerCallback = location => {
    this.setState({ pathName: location.pathname })
  }

  computeActive(initialValue, to, subItems) {
    const { pathName } = this.state

    if (
      initialValue !== null &&
      initialValue !== undefined &&
      initialValue === true
    ) {
      return true
    }

    if (to !== null && to !== undefined && to === pathName) {
      return true
    }

    if (subItems !== null && subItems !== undefined) {
      if (
        subItems.find(
          item =>
            item.to !== null && item.to !== undefined && item.to === pathName
        )
      ) {
        return true
      }
    }

    return false
  }

  render() {
    const {
      className,
      children,
      tabbed = true,
      items,
      itemsObjects,
      routerContextComponentType
    } = this.props
    const classes = cn({ nav: true, 'nav-tabs': tabbed }, className)

    let element = null
    if (routerContextComponentType) {
      const routerContextComponentFactory = React.createFactory(
        routerContextComponentType
      )
      element = routerContextComponentFactory({
        callback: this.routerCallback
      })
    }

    return (
      <React.Fragment>
        {element}
        <ul className={classes}>
          {items ||
            (itemsObjects &&
              itemsObjects.map((a, i) => (
                <NavItem
                  key={i}
                  icon={a.icon}
                  value={a.value}
                  to={a.to}
                  hasSubNav={!!a.subItems}
                  LinkComponent={a.LinkComponent}
                  subItemsObjects={a.subItems}
                  active={this.computeActive(a.active, a.to, a.subItems)}
                  useExact={a.useExact}
                />
              ))) ||
            children}
        </ul>
      </React.Fragment>
    )
  }
}
