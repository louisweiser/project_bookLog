import styles from "@/styles/components/filter.module.css";

export default function FilterBar() {
  return (
    <ul className={styles.list}>
      <li>
        <button className={styles.button}>filter</button>
      </li>
      <li>
        <button className={styles.button}>view</button>
      </li>
      <li>
        <button className={styles.button}>sort</button>
      </li>
      <li>
        <button className={styles.button}>width</button>
      </li>
    </ul>
  );
}
