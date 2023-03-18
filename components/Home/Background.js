import { TestSVG } from "@/public/svgs/homeSVG.js";

import styles from "./background.module.css";

export default function Background() {
  return (
    <div className={styles.containerbody}>
      <TestSVG />
    </div>
  );
}
