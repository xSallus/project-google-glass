import React from 'react'

import styles from '../../styles/components/menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menucontainer}>
            <ul className={styles.menu}>
                <li><a href="/">home</a></li>
                <li><a href="/">specifications</a></li>
                <li><a href="/">media</a></li>
                <li><a href="/">photos</a></li>
                <li><a href="/">contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
