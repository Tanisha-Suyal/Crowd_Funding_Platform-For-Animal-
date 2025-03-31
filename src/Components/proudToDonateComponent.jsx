import React, { useEffect, useState } from "react";
import donate1 from "./assets/Donate1.png";
import donate2 from "./assets/Donate2.png";
import donate3 from "./assets/Donate3.png";
import styles from "./styles/proudToDonate.module.css";

const ProudToDonate = () => {
  const x = [".myactive", ".mynone"];
  const [proprety, setProperty] = useState(x);
  const [index, setIndex] = useState(0);
  let n = 3;

  const setImage = () => {
    let i = index;
    var current = [...proprety];

    current[i] = ".mynone";
    i = (i + 1) % n;

    current[i] = ".myactive";
    setProperty(current);
    setIndex(i);
  };

  useEffect(() => {
    const timer = setTimeout(setImage, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <React.Fragment>
      {/* "Proud to Donate" Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.header}>Proud to Donate</h1>
        <p className={styles.description}>
          Remember that the happiest people are not those getting more, but
          those giving more.
        </p>
      </section>

      {/* Image Slideshow Section */}
      <div className={`col-11 m-auto ${styles.container}`}>
        <img
          src={donate1}
          alt="Donate1"
          className={proprety[0] === ".myactive" ? styles.myactive : styles.mynone}
        />
        <img
          src={donate2}
          alt="Donate2"
          className={proprety[1] === ".myactive" ? styles.myactive : styles.mynone}
        />
        <img
          src={donate3}
          alt="Donate3"
          className={proprety[2] === ".myactive" ? styles.myactive : styles.mynone}
        />
      </div>
    </React.Fragment>
  );
};

export default ProudToDonate;
