import React from 'react'

import styles from '../../styles/components/header.module.css'
import Menu from '../Menu'

const Header = () => {
    return (
        <nav className={styles.header}>
            <Menu />
        </nav>
    )
}

export default Header
