import { useState } from "react";
import styles from "./Categories.module.scss";

function CategoriesSection() {
  return (
    <div className={styles.categoriesSection}>
      {/*first grid list*/}
      <div className={styles.fourCategories}>
        <div
          className={styles.categoriesElement}
          style={{ background: "#FFE2DE" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#C4E769" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Running & Spinning
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#62D0DF" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Pumping Iron
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#0052C1" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Pumping Iron
          </div>
        </div>
      </div>
      {/*second grid list*/}
      <div className={styles.threeCategories} style={{ marginBottom: 0 }}>
        <div
          className={`${styles.categoriesElement} ${styles.backImage}`}
          // style={{ background: "#22356F" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#0052C1" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#76B58B" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#62D0DF" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#DEE1FF" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
        <div
          className={styles.categoriesElement}
          style={{ background: "#8F00FF" }}
        >
          <hr />
          <div className={styles.text}>
            <div className={styles.dot}>&#8226;</div>
            Weight Lifting
          </div>
        </div>
      </div>
      {/*third section*/}
      <div className={styles.threeCategories2}>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
        {/*tile*/}
        <div className={styles.categoriesElement}>
          <div className={styles.categoryTitle}>Work/Life Balance</div>
          <div className={styles.categoryText}>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;
