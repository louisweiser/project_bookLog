import Image from "next/image";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

import styles from "./cover.module.css";

export default function CoverFromData({ slug, height }) {
  const { bookData } = useContext(DataContext);

  if (!slug || slug === "") {
    return <div>error</div>;
  }

  const FilterData = (array, key, value) => {
    return array.filter((item) => item[key] === value);
  };

  const image = FilterData(bookData, "slug", slug);

  if (!image[0]) {
    return <div>error</div>;
  } //Error handling

  const relativewidth = Math.floor(image[0].relativefactor * height);

  return (
    <div style={{ width: relativewidth, height: height }}>
      <Image
        className={styles.image}
        src={`/images/cover/${image[0].cover}`}
        width={relativewidth}
        height={height}
        alt="Image"
        priority //das bild wird mit höhere priorität geladen -> notwendig (empfehleswert) wenn bild eigene absolute dimensionen als prop bekommt (width and height)
      />
    </div>
  );
}
