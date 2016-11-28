import React from 'react'

import _ from './intl'
import ActionButton from './action-button'
import Icon from './icon'
import Link from './link'

const STYLE = {
  marginBottom: '1em',
  marginLeft: '1em'
}

const TabButton = ({
  labelId,
  ...props
}) => (
  <ActionButton
    {...props}
    size='large'
    style={STYLE}
  ><span className='hidden-md-down'>{_(labelId)}</span></ActionButton>
)
export { TabButton as default }

export const TabButtonLink = ({
  labelId,
  icon,
  ...props
}) => (
  <Link
    {...props}
    className='btn btn-lg btn-primary'
    style={STYLE}
  >
    <span className='hidden-md-down'>
      {icon && (
        <span>
          <Icon icon={icon} />
          {' '}
        </span>
      )}
      {_(labelId)}
    </span>
  </Link>
)