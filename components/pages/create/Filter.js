import { useContext } from "react"; //global state for
import Link from "next/link";
import { MyContext } from "@/contexts/myContext.js"; //global state for

import styles from "./filter.module.css";

export default function FilterComponent() {
  const { setMyStateCreate } = useContext(MyContext); //global state for
  const { theme, setTheme } = useContext(MyContext);
  const { setInput1 } = useContext(MyContext); //global state for
  const { setInput2 } = useContext(MyContext); //global state for
  const { setInput3 } = useContext(MyContext); //global state for

  const handleOnClick = () => {
    setMyStateCreate(true);
  };

  const handleOnClear = () => {
    setInput1("");
    setInput2("");
    setInput3("");
  };

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <button
          className={theme === "quote" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("quote");
          }}
        >
          Zitat
        </button>
      </li>
      <li className={styles.listItem}>
        <button
          className={theme === "story" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("story");
          }}
        >
          Story
        </button>
      </li>
      <li className={styles.listItem}>
        <button
          className={theme === "summary" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("summary");
          }}
        >
          Summary
        </button>
      </li>
      <li className={styles.listIitem}>
        <Link href={"/create/newbook"}>
          <div className={styles.button}>new Book</div>
        </Link>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClick}>
          current Book
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClear}>
          clear
        </button>
      </li>
    </ul>
  );
}
