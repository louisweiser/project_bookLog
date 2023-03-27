import Image from "next/image";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

import styles from "./cover.module.css";

export default function CoverFromData({ slug, height }) {
  const { bookData } = useContext(DataContext);

  const FilterData = (array, key, value) => {
    return array.filter((item) => item[key] === value);
  };

  const image = FilterData(bookData, "slug", slug);

  const relativewidth = Math.floor(image[0].relativefactor * height);

  return (
    <div style={{ width: relativewidth }}>
      <Image
        className={styles.image}
        src={`/images/cover/${image[0].cover}`}
        width={relativewidth}
        height={height}
        alt="Image"
      />
    </div>
  );
}
