import BackLibraryButton from "@/components/common/Link/BackLibrary.js";

import styles from "./collection.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.position}>
        <BackLibraryButton></BackLibraryButton>
      </div>
      <h1 className={styles.header}>{title}</h1>
    </header>
  );
}
