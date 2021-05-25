import React from 'react'

import useIcon from '../../contexts/HeaderContext'

import styles from '../../styles/components/menu.module.css'

const Menu = () => {
    const [ toggleIcon ] = useIcon()

    return (
        <div className={styles.menucontainer}>
            <ul className={styles.menu}>
                <li onMouseEnter={()=>toggleIcon('home')} ><a href="/">home</a></li>
                <li onMouseEnter={()=>toggleIcon('specs')}><a href="/specs">specifications</a></li>
                <li onMouseEnter={()=>toggleIcon('media')}><a href="/media">media</a></li>
                <li onMouseEnter={()=>toggleIcon('photos')}><a href="/photos">photos</a></li>
                <li onMouseEnter={()=>toggleIcon('contact')}><a href="/contact">contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
