import Image from "next/image";
import { useState, useEffect } from "react";

import SettingButton from "@/components/common/Link/Setting.js";

import styles from "./home.module.css";

export default function Header({ title }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(Math.floor(window.innerWidth));
    }

    window.addEventListener("resize", handleResize); //bei Änderungen der Bildschirmgröße soll die Breit neu ermittelt werden

    setScreenWidth(window.innerWidth); // Initialisiere die aktuelle Bildschirmgröße

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // Entferne den Event-Listener, wenn die Komponente unmountet wird
  }, []);

  const height = Math.floor(screenWidth * 0.40357142857);

  return (
    <header className={styles.header}>
      <div className={styles.position}>
        {/* <SettingButton></SettingButton> */}
      </div>
      <h1 className={styles.font}>{title}</h1>
      <div className={styles.image}>
        <Image
          src="/images/crop.jpg"
          width={screenWidth}
          height={height}
          alt="img"
        ></Image>
      </div>
    </header>
  );
}
