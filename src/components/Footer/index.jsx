import React from "react";

import styles from "../../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.foot}>
      <p>Copyright &copy; 2021 - by xSallus &trade;</p>
      <div>
        <a href="https://github.com/xSallus">Github&trade;</a>
        <span>&nbsp;|&nbsp;</span>
        <a 
          href="https://linkedin.com/in/salomao-vasconcelos"
        >Linkedin&trade;</a>
      </div>
    </footer>
  );
};

export default Footer;
