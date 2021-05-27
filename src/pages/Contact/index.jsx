import React from 'react'

import SectionHeader from '../../components/SectionHeader'
import Form from '../../components/ContactForm'

import styles from '../../styles/pages/contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contactContainer} >
            <SectionHeader title="Contact form" misc="Find us &gt; Contact" />
            <Form />
        </div>
   )
}

export default Contact
