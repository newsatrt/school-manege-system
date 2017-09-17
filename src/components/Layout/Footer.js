import React from 'react'
import styles from './Footer.css'
import config from '../../utils/config'

const Footer = () => <div className={styles.footer}>
  {config.footerText}
</div>

export default Footer
