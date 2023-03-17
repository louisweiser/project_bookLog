import Link from "next/link";
import Image from "next/image";

import styles from "./home.module.css";

export default function HomePageButton({ page }) {
  const route = "./home/" + page;
  return (
    <Link href={route}>
      <div className={styles.container}>{page}</div>
    </Link>
  );
}
