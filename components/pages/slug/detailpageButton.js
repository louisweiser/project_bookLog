import React from "react";

import styles from "./detailpagebutton.module.css";

export default function DetailpageButton({ state }) {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Story</button>
      <button className={styles.button}>Quote</button>
    </div>
  );
}
