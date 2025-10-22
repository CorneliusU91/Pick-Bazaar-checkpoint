import React from 'react'

const Card = ({className, children, data_catId, ...rest}) => {
  return (
    <div data-catid={data_catId} className={className} {...rest}>
        {children}
    </div>
  )
}

export default Card