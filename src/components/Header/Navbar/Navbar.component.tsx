import { useState } from "react";
import styles from "./Navbar.module.scss";

function NavbarComponent() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_elem}>
        <div className={styles.title}>Thrivetalk</div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.navbar_elem}>
        <div className={styles.nav_links}>
          <div className={`${styles.nav_link} ${styles.active}`}>Home</div>
          <div className={styles.nav_link}>About</div>
          <div className={styles.nav_link}>Services</div>
          <div className={styles.nav_link}>Blog</div>
        </div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.navbar_elem}>
        <div className={styles.contact}>Contact us</div>
      </div>
    </div>
  );
}

export default NavbarComponent;
