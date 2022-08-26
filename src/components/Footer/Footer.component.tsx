import { useState } from "react";
import styles from "./Footer.module.scss";

function FooterComponent() {
  return (
    <div className={styles.footer}>
      <img
        src="/images/png/autumn-image-1.png"
        className={styles.footerImage}
        alt=""
      />
      <div className={styles.footerOptions}>
        {/*first*/}
        <div className={styles.footerOpt}>
          <div className={styles.footerOptTitle}>Some Info</div>
          <div className={styles.footerOptText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula.
          </div>
        </div>
        {/*second*/}
        <div className={styles.footerOpt}>
          <div className={styles.footerOptTitle}>Enfold Health</div>
          <div className={styles.footerOptText}>
            Main Street 1, Olcott <br />
            Buffalo, United States <br />
            <br />
            +555 283 784 333 <br />
            <a>office@enfold-health.com</a>
          </div>
        </div>
        {/*third*/}
        <div className={styles.footerOpt}>
          <div className={styles.footerOptTitle}>Office hours</div>
          <div className={styles.footerOptText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula.
          </div>
        </div>
      </div>
      <div className={styles.bottom}>&copy; Copyright - ThriveTalk 2017</div>
    </div>
  );
}

export default FooterComponent;
