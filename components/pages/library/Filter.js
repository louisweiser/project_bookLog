import {
  ShelfSVG,
  CollectionSVG,
  ZoomOutSVG,
  RecentSVG,
  FilterSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

import styles from "./filter.module.css";

export default function FilterComponent() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <ShelfSVG></ShelfSVG>
          Shelf
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <CollectionSVG></CollectionSVG>
          Genre
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <ZoomOutSVG></ZoomOutSVG>
          Overview
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <RecentSVG></RecentSVG>
          Recent
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <FilterSVG></FilterSVG>
          Filter: All
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <ResetSVG></ResetSVG>
          Reset
        </button>
      </li>
    </ul>
  );
}
