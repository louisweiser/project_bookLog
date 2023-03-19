import { BackgroundSVG } from "@/public/svgs/background.js";

import styles from "./background.module.css";

export default function Background() {
  return (
    <div className={styles.containerbody}>
      <BackgroundSVG />
    </div>
  );
}
