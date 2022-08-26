import { useState } from "react";
import styles from "./ShouldKnow.module.scss";

function ShouldKnowComponent() {
  return (
    <div className={styles.shouldKnow}>
      <img
        className={styles.shouldKnowImage}
        src="images/png/linkedin-image-2.png"
        alt="linked-in-image-2.png"
      />
      <div className={styles.shouldKnowTextContainer}>
        <div className={styles.shouldKnowTitle}>YOU SHOULD ALSO KNOW</div>
        <div className={styles.shouldKnowText}>
          MDD affects more than 16.1 million American adults, or about 6.7%of
          the U.S. population age 18 and older in a given year. We at{" "}
          <a>ThriveTalk</a>
          &nbsp; can help you.
        </div>
        <div className={styles.getHelp}>Get help now</div>
      </div>
    </div>
  );
}

export default ShouldKnowComponent;
