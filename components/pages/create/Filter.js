import { useContext } from "react"; //global state for
import Link from "next/link";

import { MyContext } from "@/contexts/myContext.js"; //global state for

import {
  QuoteSVG,
  StorySVG,
  SummarySVG,
  AddBookSVG,
  CurrentBookSVG,
  ArrowRightSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

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
          className={theme === "quotes" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("quotes");
          }}
        >
          <QuoteSVG></QuoteSVG>
          Quote
        </button>
      </li>
      <li className={styles.listItem}>
        <button
          className={theme === "stories" ? styles.buttonactive : styles.button}
          onClick={() => {
            setTheme("stories");
          }}
        >
          <StorySVG></StorySVG>
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
          <SummarySVG></SummarySVG>
          Summary
        </button>
      </li>
      <li className={styles.listIitem}>
        <Link href={"/create/newbook"}>
          <div className={styles.button}>
            <AddBookSVG></AddBookSVG>
            New Book
            <ArrowRightSVG></ArrowRightSVG>
          </div>
        </Link>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClick}>
          <CurrentBookSVG></CurrentBookSVG>
          Current Book
          <ArrowRightSVG></ArrowRightSVG>
        </button>
      </li>
      <li className={styles.listIitem}>
        <button className={styles.button} onClick={handleOnClear}>
          <ResetSVG></ResetSVG>
          Reset
        </button>
      </li>
    </ul>
  );
}
