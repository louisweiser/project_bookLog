import styles from "./filter.module.css";

export default function FilterComponent() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button className={styles.button}>filter</button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>view</button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>sort</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>width</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>order</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>clear all</button>
      </li>
    </ul>
  );
}
