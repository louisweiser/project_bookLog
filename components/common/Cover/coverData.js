import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./cover.module.css";

export default function CoverFromData({ id, height }) {
  const object = bookMetaData[id - 1];

  return (
    <Image
      className={styles.img}
      src={`/images/cover/${object.name}`}
      width={object.relativefactor * height}
      height={height}
      alt="Image"
    />
  );
}
