import { useContext } from "react"; //global state for
import { MyContext } from "@/contexts/myContext.js"; //global state for

import styles from "./filter.module.css";

export default function FilterComponent() {
  const { setMyStateCreate } = useContext(MyContext); //global state for

  const handleOnClick = () => {
    setMyStateCreate(true);
  };

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
        <button className={styles.button} onClick={handleOnClick}>
          current Book
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button}>clear</button>
      </li>
    </ul>
  );
}
