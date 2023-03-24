import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react"; //global state for
import { MyContext } from "@/contexts/myContext.js"; //global state for

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./homenavigation.module.css";

export default function HomeNavigation() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const { currentbook, setCurrentbook } = useContext(MyContext); //global state for

  //useEffect soll die Bildschirmbreite ermitteln und in den state viewportWidth speichern und aktuellisieren
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
    <div className={styles.navigation}>
      <Link href={"./home/wishlist"}>
        <div className={styles.positionrelative}>
          <p className={styles.textleft}>Wishlist</p>
          <Image
            src="/images/wishlist.jpeg"
            alt="img"
            width={Math.floor(0.33 * viewportWidth - 0)}
            height={Math.floor(1.5027 * (0.22 * viewportWidth))}
          ></Image>
        </div>
      </Link>
      <Link href={"./home/dictonary"}>
        <div className={styles.positionrelative}>
          <p className={styles.textcenter}>Dictonary</p>
          <Image
            src="/images/dictonary.jpeg"
            alt="img"
            width={Math.floor(0.33 * viewportWidth - 0)}
            height={Math.floor(1.5027 * (0.22 * viewportWidth))}
          ></Image>
        </div>
      </Link>
      <Link href={`./library/book/${bookMetaData[currentbook - 1].slugname}`}>
        <div className={styles.positionrelative}>
          <p className={styles.textright}>Current Book</p>
          <Image
            src="/images/current.jpg"
            alt="img"
            width={Math.floor(0.33 * viewportWidth - 0)}
            height={Math.floor(1.5027 * (0.22 * viewportWidth))}
          ></Image>
        </div>
      </Link>
    </div>
  );
}
