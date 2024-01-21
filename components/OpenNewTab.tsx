import React from 'react'

interface OpenNewTabProps {
  url: string
  display: string
}

const OpenNewTab: React.FC<OpenNewTabProps> = ({ url, display }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {display}
    </a>
  )
}

export default OpenNewTab
