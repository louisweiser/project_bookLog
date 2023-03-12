import Link from "next/link";

import styles from "@/styles/components/Buttons/home.module.css";

export default function HomePageButton({ page }) {
  const route = "./home/" + page;
  return (
    <div className={styles.container}>
      <Link href={route}>{page}</Link>
    </div>
  );
}
