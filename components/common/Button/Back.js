import { useRouter } from "next/router";
import { BackSVG } from "@/public/svgs/router.js";

import styles from "./back.module.css";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button className={styles.topLeft} onClick={handleBackClick}>
      <BackSVG></BackSVG>
    </button>
  );
}
