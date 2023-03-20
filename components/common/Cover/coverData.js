//import CoverFromData from "@/components/common/Cover/coverData.js";

import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./cover.module.css";

export default function CoverFromData({ id, height }) {
  const object = bookMetaData[id - 1];
  const relativewidth = object.relativefactor * height;

  return (
    <div style={{ width: relativewidth }}>
      <Image
        className={styles.img}
        src={`/images/cover/${object.name}`}
        width={relativewidth}
        height={height}
        alt="Image"
      />
    </div>
  );
}
