import React from 'react'
import { useState } from 'react'
import OpenNewTab from './OpenNewTab'
import styles from '../styles/Tooltip.module.css'
import { Platform, PLATFORM } from './Platform'

interface TooltipProps {
  name: string
  streamId: string
  platform: Platform
}

const Tooltip: React.FC<TooltipProps> = ({ name, streamId, platform }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  let url = ''
  switch (platform) {
    case PLATFORM.twitch:
      url = platform + 'videos/' + streamId
      break
    case PLATFORM.youtube:
      url = platform + 'watch?v=' + streamId
      break
    default:
      break
  }
  return (
    <span
      className={styles.tooltip}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <i className={styles.icon}></i>
      <span
        className={styles.tooltipText}
        onMouseEnter={() => setShowTooltip(true)}
      >
        {showTooltip && <OpenNewTab url={url} display={name} />}
      </span>
    </span>
  )
}

export default Tooltip
