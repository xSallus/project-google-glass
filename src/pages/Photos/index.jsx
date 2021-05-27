import React, { useState } from 'react'

import styles from '../../styles/pages/photos.module.css'

const Photos = () => {
    const [photo, setPhoto] = useState('images/galeria-01.jpg')

    return (
        <div className={styles.photosContainer} >
            <img src={photo} alt="Selection" />
            <div>
                <img
                  src="images/galeria-01.jpg"
                  onCLick={()=>setPhoto('images/galeria-01.jpg')}
                  alt="Option 01" />
                <img
                  src="images/galeria-02.jpg"
                  onCLick={()=>setPhoto('images/galeria-02.jpg')}
                  alt="Option 02" />
                <img
                  src="images/galeria-03.jpg"
                  onCLick={()=>setPhoto('images/galeria-03.jpg')}
                  alt="Option 03" />
                <img
                  src="images/galeria-04.jpg"
                  onCLick={()=>setPhoto('images/galeria-04.jpg')}
                  alt="Option 04" />
                <img
                  src="images/galeria-05.jpg"
                  onCLick={()=>setPhoto('images/galeria-05.jpg')}
                  alt="Option 05" />
                <img
                  src="images/galeria-06.jpg"
                  onCLick={()=>setPhoto('images/galeria-06.jpg')}
                  alt="Option 06" />
            </div>
        </div>
   )
}

export default Photos
