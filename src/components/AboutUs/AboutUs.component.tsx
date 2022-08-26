import { useState } from "react";
import styles from "./AboutUs.module.scss";

function TopSectionComponent() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsTitle}>About us</div>
      <div className={styles.aboutUsText}>
        We want to help you thrive! Whether you are just looking for someone to
        talk to, or are struggling with a mental wellness issue we’re here to
        help. Our highly talented therapists can help you with a range of issues
        including relationships, sex, PTSD, depression, social anxiety, or even
        just caring for yourself more.
      </div>
      <div className={styles.canHelp}>We can help you with</div>
    </div>
  );
}

export default TopSectionComponent;
