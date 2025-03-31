import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const ContactUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>Contact Us</h1>
        <div className={styles.content}>
          <p className={styles.text}>
            We would love to hear from you! Feel free to reach out with any
            questions or suggestions. Our team is here to assist you in any way
            we can. Whether you need more information or want to get involved in
            our projects, don’t hesitate to contact us.
          </p>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h2 className={styles.inheader}>Get In Touch</h2>
              <p className={styles.inpara}>We’re here to help!</p>
              <div className={styles.formContainer}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h2 className={styles.inheader}>Contact Details</h2>
              <p className={styles.incontent}>
                <b>Email:</b> test@gmail.com
                <br />
                <b>Phone:</b> +91 910000000
                <br />
                <br />
                If you have any queries, feel free to reach out to us via email
                or phone. Our team will get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
