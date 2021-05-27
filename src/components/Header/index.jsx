import React from 'react'

import Menu from '../Menu'

import useIcon from '../../contexts/HeaderContext'

import styles from '../../styles/components/header.module.css'

const Header = () => {
    const [ icon ] = useIcon()

    return (
        <nav className={styles.header}>
            <Menu />
            <div>
                <h1>google glass</h1>
                <h2>Google's revolution is coming</h2>
            </div>
            <img src={`/images/${icon}.png`} alt="Page Icon" />
        </nav>
    )
}

export default Header
