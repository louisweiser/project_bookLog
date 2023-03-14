import styles from "@/styles/components/filter.module.css";

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
        <button className={styles.button}>width hhhhhhhhhhhhhhhhhhhhhhh</button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>width hhhhhhhhhhhhhhhhhhhhhhh</button>
      </li>
    </ul>
  );
}
