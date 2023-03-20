import { BackSVG } from "@/public/svgs/router.js";
import Link from "next/link";

import styles from "./back.module.css";

export default function BackLibraryButton() {
  return (
    <Link href={`/library`}>
      <div className={styles.topLeft}>
        <BackSVG></BackSVG>
      </div>
    </Link>
  );
}
