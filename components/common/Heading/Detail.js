import BackLibraryButton from "@/components/common/Link/BackLibrary.js";

import styles from "./detail.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.position}>
        <BackLibraryButton></BackLibraryButton>
      </div>
    </div>
  );
}
