import {
  FilterSVG,
  ShuffleSVG,
  ZoomInSVG,
  ListSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

import styles from "./filter.module.css";

export default function FilterComponent() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <FilterSVG></FilterSVG> Filter: All
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <ShuffleSVG></ShuffleSVG>Random
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <ZoomInSVG></ZoomInSVG>Details
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <ListSVG></ListSVG>List
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <ResetSVG></ResetSVG>Reset
        </button>
      </li>
    </ul>
  );
}
