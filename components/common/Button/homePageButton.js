import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./home.module.css";

export default function HomePageButton({ page }) {
  const route = "./home/" + page;
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
    <Link href={route}>
      <div className={styles.container}>
        <Image
          className={styles.imgcon}
          src="/images/wishlist.jpeg"
          alt="img"
          width={0.28 * viewportWidth}
          height={1.5027 * (0.28 * viewportWidth)}
        ></Image>
      </div>
    </Link>
  );
}
