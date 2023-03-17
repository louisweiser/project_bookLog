import Link from "next/link";

import styles from "./search.module.css";

export default function SearchButton({ link }) {
  return (
    <Link href={link}>
      <div className={styles.container}>
        <h5 className={styles.text}>Search ...</h5>
      </div>
    </Link>
  );
}
