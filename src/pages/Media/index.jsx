import React from 'react'

import styles from '../../styles/pages/media.module.css'

const Media = ({ title }) => {
    return (
        <div className={styles.mediaContainer} >
            <h1>{title}  page</h1>
        </div>
   )
}

export default Media
