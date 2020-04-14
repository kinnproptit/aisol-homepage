import React from 'react'
import styled from 'styled-components'

export const Icon = ({
  Source,
  height = '20px',
  fill,
  width = '20px',
  className,
  isImage = false,
  ...props
}) => {
  if (/.(jpe?g|png|gif|bmp)$/i.test(Source) || isImage) {
    return (
      <IconImage
        className={className}
        src={Source}
        height={height}
        width={width}
        {...props}
      />
    )
  }
  return (
    <IconSource
      className={className}
      fill={fill}
      height={height}
      width={width}
      {...props}
    >
      <Source />
    </IconSource>
  )
}

const IconImage = styled.img``

const IconSource = styled.div`
  svg {
    height: ${props => props.height};
    width: ${props => props.width};
  }
  path {
    ${props => props.fill && 'fill: ' + props.fill};
  }
`
