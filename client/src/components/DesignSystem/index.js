import React from 'react'
import { Button } from '@material-ui/core'

import styles from './DesignSystem.module.scss'

const DesignSystem = () => {
  return (
    <Button className={styles.toskabutton}>
      Styled with css modules
    </Button>
  )
}

export default DesignSystem
