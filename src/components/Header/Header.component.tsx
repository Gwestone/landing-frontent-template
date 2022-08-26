import { useState } from "react";
import styles from "./Header.module.scss";
import NavbarComponent from "./Navbar/Navbar.component";

function HeaderComponent() {
  return (
    <>
      <NavbarComponent />
      <div className={styles.roundPhoto} />
      <div className={styles.blueRound} />
      <div className={styles.topSectionComponent}>
        {/*main content*/}
        <div className={styles.container}>
          <div className={styles.mainPageTextContainer}>
            <div className={styles.mainPageTitle}>Thrivetalk</div>
            <div className={styles.mainPageHelp}>
              Helping you Thrive in all areas of life
            </div>
            <div className={styles.mainPageDesc}>
              Our highly talented therapists can help you with a range of issues
              including relationships, sex, PTSD, depression, social anxiety, or
              even just caring for yourself more.
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button1}>Who am i</div>
              <div className={styles.button2}>What do i do </div>
            </div>
          </div>
        </div>
        <div className={styles.yellowBackground} />
      </div>
    </>
  );
}

export default HeaderComponent;
