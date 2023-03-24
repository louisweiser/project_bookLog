import {
  Shelf,
  Collection,
  ZoomOut,
  Recent,
  All,
  Clear,
} from "@/public/icons/library.js";

import styles from "./filter.module.css";

export default function FilterComponent() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <Shelf />
          Shelf
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <Collection />
          Genre
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>
          <ZoomOut />
          Overview
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <Recent />
          Recent
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <All />
          All
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>
          <Clear />
          Reset
        </button>
      </li>
    </ul>
  );
}
