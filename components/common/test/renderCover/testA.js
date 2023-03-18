import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "../bookcover.module.css";

export default function RenderBook({ id }) {
  const object = bookMetaData[id];
  return (
    <Image
      className={styles.img}
      src={`/images/cover/${object.name}`}
      width={object.width}
      height={object.height}
      alt="Image"
    />
  );
}
