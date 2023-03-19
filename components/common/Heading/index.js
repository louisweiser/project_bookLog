import Head from "next/head";

import styles from "./heading.module.css";

export default function Header({ title }) {
  return (
    <header>
      <h1 className={title === "BookLog" ? styles.headerhome : styles.header}>
        {title}
      </h1>
    </header>
  );
}
