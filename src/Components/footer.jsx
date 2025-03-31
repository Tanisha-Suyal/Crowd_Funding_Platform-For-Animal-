import React from "react";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.caption}>
            <strong>Made by</strong> Tanisha Suyal
          </p>
        </div>
        <div className={styles.middle}>
          <p className={styles.designedBy}>
            <b>Designed by</b>
            <br />
            <span className={styles.name}>Tanisha Suyal</span>
          </p>
          <div className={styles.links}>
            <a className={styles.link} href="/about-us">
              About
            </a>
            <a className={styles.link} href="/contact-us">
              Contact Us
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.contact}>
            For any queries, reach out to us at
            <br />
            <b>test@gmail.com</b>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <hr className={styles.line} />
        <p className={styles.copyrightText}>
          &copy; 2025 Animal Care Crowdfunding. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
