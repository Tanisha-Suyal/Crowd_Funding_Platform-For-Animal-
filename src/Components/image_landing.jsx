import React from "react";
import { Link } from "react-scroll";
import styles from "./styles/image_landing.module.css";
import LandingImage from "../Components/assets/animal_landing_page.png"; // ✅ Correct Path

const ImageLanding = () => {
  return (
    <React.Fragment>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${LandingImage})` }}
      >
        <div className={styles.overlay}></div> {/* ✅ Dark overlay for readability */}
        <div className={styles.content}>
          <h1 className={styles.text}>Animal Care Crowdfunding</h1>
          <p className={styles.header}>Help Save & Protect Animals</p>
          <Link
            to="Donate"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className={styles.donateBtn}>DONATE NOW</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageLanding;
