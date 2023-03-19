import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./homerouter.module.css";

export default function HomeRouter() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      // Überprüfen, ob window definiert ist
      handleResize(); // Die Breite beim Laden der Seite ermitteln
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        // Überprüfen, ob window definiert ist
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className={styles.containermain}>
      <Link href={"./home/wishlist"}>
        <div className={styles.container}>
          <p className={styles.left}>Wishlist</p>
          <Image
            className={styles.imgcon}
            src="/images/wishlist.jpeg"
            alt="img"
            width={0.33 * viewportWidth - 10}
            height={1.5027 * (0.22 * viewportWidth)}
          ></Image>
        </div>
      </Link>
      <Link href={"./home/dictonary"}>
        <div className={styles.container}>
          <p className={styles.center}>Dictonary</p>
          <Image
            className={styles.imgcon}
            src="/images/dictonary.jpeg"
            alt="img"
            width={0.33 * viewportWidth - 10}
            height={1.5027 * (0.22 * viewportWidth)}
          ></Image>
        </div>
      </Link>
      <Link href={"./home/current book"}>
        <div className={styles.container}>
          <p className={styles.right}>Current Book</p>
          <Image
            className={styles.imgcon}
            src="/images/current.jpg"
            alt="img"
            width={0.33 * viewportWidth - 10}
            height={1.5027 * (0.22 * viewportWidth)}
          ></Image>
        </div>
      </Link>
    </div>
  );
}
