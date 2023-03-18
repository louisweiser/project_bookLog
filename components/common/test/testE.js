import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./bookcover.module.css";

export default function RenderCollection() {
  return bookMetaData.map((objekt) => (
    <li className={styles.padding} key={objekt.id}>
      <Image
        className={styles.img}
        src={`/images/cover/${objekt.name}`}
        width={objekt.width}
        height={objekt.height}
        alt="Image"
      />
    </li>
  ));
}
