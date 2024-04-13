import React from 'react'
import Style from '../styles/Link.module.css'

interface OpenNewTabProps {
  url: string
  display: string
}

const OpenNewTab: React.FC<OpenNewTabProps> = ({ url, display }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={Style.link}
    >
      {display}
    </a>
  )
}

export default OpenNewTab
