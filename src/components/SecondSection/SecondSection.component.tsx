import { useState } from "react";
import styles from "./SecondSection.module.scss";

function TopSectionComponent() {
  return (
    <div className={styles.secondSection}>
      <div className={styles.secondText}>
        <div className={styles.secondSectionTitle}>Why Thrive?</div>
        <div className={styles.secondSectionText}>
          <b>
            Want to improve your well-being from the comfort of your own couch?
            Are you having trouble finding the right therapist?{" "}
          </b>{" "}
          Here at ThriveTalk, our licensed therapists provide the same quality
          care you would get in office from anywhere you can access your laptop
          or mobile phone. Become your best self with ThriveTalk. Start therapy
          now with a licensed therapist!
        </div>
      </div>
      <img
        className={styles.secondSectionImage}
        src="/images/png/exercise-image-1.png"
        alt="christopher-campbell-40367"
      />
    </div>
  );
}

export default TopSectionComponent;
