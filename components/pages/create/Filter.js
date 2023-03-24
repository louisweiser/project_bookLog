import { useContext } from "react"; //global state for
import Link from "next/link";

import { MyContext } from "@/contexts/myContext.js"; //global state for

import {
  Quote,
  Story,
  Summary,
  NewBook,
  CurrentBook,
  Clear,
  LinkTo,
} from "@/public/icons";

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
          <Quote />
          Quote
        </button>
      </li>

      <li className={styles.listItem}>
        <button
          className={theme === "story" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("story");
          }}
        >
          <Story />
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
          <Summary />
          Summary
        </button>
      </li>
      <li className={styles.listIitem}>
        <Link href={"/create/newbook"}>
          <div className={styles.button}>
            <NewBook />
            New Book
            <LinkTo />
          </div>
        </Link>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClick}>
          <CurrentBook />
          Current Book
          <LinkTo />
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClear}>
          <Clear />
          Reset
        </button>
      </li>
    </ul>
  );
}
