import BackLibraryButton from "@/components/common/Link/BackCreate.js";

import styles from "./newbook.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.position}>
        <BackLibraryButton></BackLibraryButton>
      </div>
    </div>
  );
}
