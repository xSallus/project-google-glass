import React from 'react'

import SeactionHeader  from '../../components/SectionHeader'

import styles from '../../styles/pages/media.module.css'

const Media = () => {

    return (
        <div className={styles.mediaContainer} >
            <SeactionHeader title="Video and sound" misc="Glass &gt; Multimedia" />
            <img src="/images/radio-tv.png" alt="Radio Tv background" />
            <video controls >
                <source src="/media/one-day.mp4" type="video/mp4" />
            </video>
            <audio controls >
                <source src="/media/2009-lovers-carvings-bibio.mp3" type="audio/mp3" />
            </audio>
        </div>
   )
}

export default Media
