import { useRouter } from "next/router";
import styles from "./Button.module.css";

export default function Backbutton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button className={styles.topLeft} onClick={handleBackClick}>
      Back
    </button>
  );
}
