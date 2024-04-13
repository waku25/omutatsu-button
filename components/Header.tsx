import React from 'react'
import Style from '../styles/Header.module.css'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={Style.header}>
      <h1>{`${title}`}</h1>
    </div>
  )
}

export default Header
