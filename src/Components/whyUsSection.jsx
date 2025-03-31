import React from "react";
import WhyUsImage from "../Components/assets/why_us.png"; // Corrected image path
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className={`row ${styles.container}`}>
        <div className={`col-md-7 ${styles.textSection}`}>
          <h1 className={styles.header}>Why Choose Us?</h1>
          <p className={styles.para}>
            At Animal Care Crowdfunding, we are committed to providing solutions that make a real difference in the lives of animals. Our platform connects compassionate individuals with meaningful projects focused on improving animal welfare globally.
            <br />
            <br />
            We believe in transparency, efficiency, and community-driven action. Every donation helps create a lasting impact, and every project receives the attention and resources it deserves.
            <br />
            <br />
            Choose us for a trusted, transparent, and powerful way to contribute to animal care initiatives. Join our mission to create a better future for animals!
          </p>
        </div>
        <div className={`col-md-5 ${styles.imageSection}`}>
          <img className={styles.image} src={WhyUsImage} alt="Why Us - Animal Care Crowdfunding" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
