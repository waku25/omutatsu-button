import React from 'react'
import styles from '../styles/Selector.module.css'
import buttonStyles from '../styles/Button.module.css'

interface SelectorProps {
  sortOrder: 'display' | 'stream'
  handleSortChange: (newSortOrder: 'display' | 'stream') => void
}

const Selector: React.FC<SelectorProps> = ({ sortOrder, handleSortChange }) => {
  return (
    <div className={styles.selector}>
      <button
        className={
          sortOrder === 'display'
            ? `${buttonStyles.button} ${buttonStyles.selected}`
            : buttonStyles.button
        }
        onClick={() => handleSortChange('display')}
      >
        あいうえお順
      </button>
      <button
        className={
          sortOrder === 'stream'
            ? `${buttonStyles.button} ${buttonStyles.selected}`
            : buttonStyles.button
        }
        onClick={() => handleSortChange('stream')}
      >
        配信毎
      </button>
    </div>
  )
}

export default Selector
