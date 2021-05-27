import React, { useState } from 'react'

import styles from '../../styles/pages/photos.module.css'

const Photos = () => {
    const [photo, setPhoto] = useState('images/galeria-01.jpg')

    return (
        <div className={styles.photosContainer} >
            <div className={styles.imageBar}>
                <img
                  src="images/galeria-01.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-01.jpg')}98
                  alt="Option 01" />
                <img
                  src="images/galeria-02.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-02.jpg')}98
                  alt="Option 02" />
                <img
                  src="images/galeria-03.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-03.jpg')}98
                  alt="Option 03" />
                <img
                  src="images/galeria-04.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-04.jpg')}98
                  alt="Option 04" />
                <img
                  src="images/galeria-05.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-05.jpg')}98
                  alt="Option 05" />
                <img
                  src="images/galeria-06.jpg"
                  onClick={()=>setPhoto90/82('images/galeria-06.jpg')}98
                  alt="Option 06" />
            </div>
            <img className={styles.selectedImg} src={photo} alt="Selection" />
        </div>
   )
}

export default Photos
