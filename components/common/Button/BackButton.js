import { useRouter } from "next/router";
import { BackSVG } from "@/public/svgs/headerSVGs";

import styles from "./button.module.css";

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
