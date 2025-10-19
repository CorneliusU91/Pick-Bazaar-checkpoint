import React from 'react'

const MainTitle = ({className, title}) => {
    return (
      <h1 className={className}>{title || "Default Text"}</h1>
    )
}

export default MainTitle