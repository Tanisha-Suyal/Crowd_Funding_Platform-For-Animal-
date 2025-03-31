import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsImage from "../Components/assets/about_us.png"; // Image path
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsImage}
            alt="About Us - IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          Welcome to Animal Care Crowdfunding! Our organization is dedicated to
          improving the lives of animals through collective action. By creating a
          community of compassionate individuals, we aim to provide better care,
          protection, and a brighter future for animals in need.
          <br />
          <br />
          <strong>Our Vision</strong>: We envision a world where every animal
          receives the care and protection they deserve. Our platform facilitates
          crowdfunding initiatives for various animal welfare projects, allowing
          people to come together and support causes that make a real difference.
          <br />
          <br />
          <strong>Our Mission</strong>: Our mission is to empower individuals to
          take action in the fight for animal rights. We provide a seamless way
          to contribute, whether through direct donations, fundraising campaigns,
          or raising awareness for animal welfare initiatives.
          <br />
          <br />
          We partner with animal care experts, shelters, and organizations to
          ensure that funds raised are used effectively and transparently to
          support life-changing projects.
          <br />
          <br />
          <strong>Why Animal Care?</strong>: Animals, especially those in
          shelters, often lack the support they need to survive and thrive. By
          supporting animal care initiatives, we can make a tangible impact. We
          encourage you to join us in our mission to create a better future for
          these innocent creatures.
          <br />
          <br />
          With every contribution, no matter how small, you are part of a larger
          movement dedicated to making the world a kinder place for animals.
          Together, we can create lasting change!
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerText}>© 2025 Animal Care Crowdfunding. All Rights Reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
