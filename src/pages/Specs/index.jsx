import React from 'react'

import SectionHeader from '../../components/SectionHeader'

import styles from '../../styles/pages/specs.module.css'

const Specs = () => {
    
    return (
        <div className={styles.specsContainer} >
            <SectionHeader title="X-ray on Google Glass" misc="Glass &gt; Specs" />
            <div>
                <p>Click on any area of the image below to see more info about the resourses of Google Glass</p>
                <p>Any red point gets to a place full of information</p>
                <div>
                    <section>
                        <span>Click on any detatched area in red</span>
                        <img src="images/mao.png" alt="Apointing hand icon" />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Specs
