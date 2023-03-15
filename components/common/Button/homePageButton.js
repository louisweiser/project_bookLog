import Link from "next/link";

import styles from "./home.module.css";

export default function HomePageButton({ page }) {
  const route = "./home/" + page;
  return (
    <Link href={route}>
      <div className={styles.container}>{page}</div>
    </Link>
  );
}
