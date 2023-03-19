import Head from "next/head";

import styles from "./heading.module.css";

export default function Header({ title }) {
  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={title === "BookLog" ? styles.headerhome : styles.header}>
        {title}
      </h1>
    </header>
  );
}
