import React from "react";
import campaignsImage from "../Components/assets/campaigns.png"; // Updated image path
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.header}>Become a Part of a Noble Cause</h1>
        <p className={styles.para}>
          Join us in making a difference. By supporting our noble cause, you
          are helping create a better world. Every contribution counts and plays
          a vital role in bringing positive change. Let’s make an impact together!
        </p>
        <img className={styles.image} src={campaignsImage} alt="Noble Cause Campaign" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
