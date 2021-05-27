import React from "react";

import styles from '../../styles/components/section.header.module.css'

const SectionHeader = ({ misc, title }) => {
  return (
    <header className={styles.sectionHeader} >
      <p>{misc}</p>
      <h1>{title}</h1>
      <h2>by xSallus</h2>
      <h3 style={{ background: 'rgba(0,0,0,0)' }} >Updated at Mar 26, 2021</h3>
    </header>
  );
};

export default SectionHeader;
