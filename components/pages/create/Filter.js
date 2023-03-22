import styles from "./filter.module.css";

export default function FilterComponent() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button className={styles.button}>Zitat</button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>Story</button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button}>Summary</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>new Book</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>clear</button>
      </li>
    </ul>
  );
}
