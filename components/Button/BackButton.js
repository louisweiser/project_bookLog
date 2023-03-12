import { useRouter } from "next/router";
import { BackSVG } from "@/public/svg/headerSVGs";

import styles from "@/styles/components/Buttons/button.module.css";

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
