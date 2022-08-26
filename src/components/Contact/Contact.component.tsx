import { useState } from "react";
import styles from "./Contact.module.scss";

function ContactComponent() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactTextContainer}>
        <div className={styles.contactUsButton}>Contact us</div>
        <div className={styles.contactTitle}>Ready. Set. Smile</div>
        <div className={styles.contactText}>
          Take the free online assessment to see if you are a candidate and get
          started on your journey.
        </div>
        <div className={styles.getHelp}>get help now</div>
      </div>
      <img
        className={styles.contactImage}
        src="/images/png/charles-image-1.png"
        alt="christopher-campbell-40367"
      />
    </div>
  );
}

export default ContactComponent;
