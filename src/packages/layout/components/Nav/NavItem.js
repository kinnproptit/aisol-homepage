import * as React from 'react'
import cn from 'classnames'
import { Dropdown } from 'tabler-react'

import { NavLink } from './NavLink'

import ClickOutside from '../../helpers/ClickOutside.react'

import { Manager, Reference } from 'react-popper'

/**
 * A NavItem with react-popper powered subIems Dropdowns
 */
export class NavItem extends React.Component {
  state = {
    isOpen: false
  }

  _handleOnClick = () => {
    if (this.props.hasSubNav) {
      this.setState(s => ({ isOpen: !s.isOpen }))
    }
    if (this.props.onClick) this.props.onClick()
  }

  render() {
    const {
      children,
      LinkComponent,
      value,
      className,
      to,
      type = 'li',
      icon,
      hasSubNav: forcedHasSubNav,
      active,
      subItems,
      subItemsObjects,
      useExact,
      position = 'bottom-start'
    } = this.props

    const hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects

    const navLink =
      (typeof children === 'string' || value) && hasSubNav ? (
        <Reference>
          {({ ref }) => (
            <NavLink
              className={className}
              to={to}
              icon={icon}
              RootComponent={LinkComponent}
              hasSubNav={hasSubNav}
              active={active}
              rootRef={ref}
              useExact={useExact}
            >
              {!hasSubNav && typeof children === 'string' ? children : value}
            </NavLink>
          )}
        </Reference>
      ) : (
        <NavLink
          className={className}
          to={to}
          icon={icon}
          RootComponent={LinkComponent}
          hasSubNav={hasSubNav}
          active={active}
          useExact={useExact}
        >
          {!hasSubNav && typeof children === 'string' ? children : value}
        </NavLink>
      )

    const childrenForAll = (
      <React.Fragment>
        {navLink}
        {typeof children !== 'string' && !hasSubNav && children}
        {hasSubNav && (
          <Dropdown.Menu arrow show={this.state.isOpen} position={position}>
            {subItems ||
              (subItemsObjects &&
                subItemsObjects.map((a, i) => (
                  <NavSubItem
                    key={i}
                    value={a.value}
                    to={a.to}
                    icon={a.icon}
                    LinkComponent={a.LinkComponent}
                    useExact={a.useExact}
                  />
                ))) ||
              children}
          </Dropdown.Menu>
        )}
      </React.Fragment>
    )

    const wrapperClasses = cn({
      'nav-item': true,
      show: this.state.isOpen
    })

    const wrappedChildren =
      type === 'div' ? (
        <ClickOutside onOutsideClick={() => this.setState({ isOpen: false })}>
          {({ setElementRef }) => (
            <div
              className={wrapperClasses}
              onClick={this._handleOnClick}
              ref={setElementRef}
            >
              {childrenForAll}
            </div>
          )}
        </ClickOutside>
      ) : (
        <ClickOutside onOutsideClick={() => this.setState({ isOpen: false })}>
          {({ setElementRef }) => (
            <li
              className={wrapperClasses}
              onClick={this._handleOnClick}
              ref={setElementRef}
            >
              {childrenForAll}
            </li>
          )}
        </ClickOutside>
      )

    return hasSubNav ? <Manager>{wrappedChildren}</Manager> : wrappedChildren
  }
}
