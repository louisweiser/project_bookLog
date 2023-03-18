import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./bookcover.module.css";

import { useState, useEffect } from "react";

export default function RenderBookCover() {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const height = 220;

  useEffect(() => {
    async function fetchImageSize(imageName) {
      const res = await fetch(`/api/image-size?id=${imageName}`);
      const data = await res.json();
      setDimensions(data);
    }

    bookMetaData.forEach((objekt) => {
      console.log(objekt.name);
      console.log(dimensions);
      fetchImageSize(objekt.name);
    });
  }, []);

  //Bestimmung der relativen Seitenverhältnisse des Bildes in abhängigkeit der festgelegten Höhe
  const relativFactor = dimensions.width / dimensions.height;
  const relativHeight = height;
  const relativWidth = relativFactor * relativHeight;

  return (
    <div>
      {bookMetaData.map((objekt) => (
        <div key={objekt.id}>
          <Image
            className={styles.img}
            src={objekt.slug}
            width={100}
            height={100}
            alt="Image"
          />
        </div>
      ))}
    </div>
  );
}

/* export default function RenderBookCover() {
  const result = [];

  bookMetaData.map((objekt) => {
    console.log(objekt.name);
    result.push(fetchImageSize(objekt.name));
  });
  console.log(result);

  return (
    <div>
      {bookMetaData.map((objekt) => (
        <div key={objekt.id}>
          <Image
            className={styles.img}
            src={objekt.slug}
            width={100}
            height={100}
            alt="Image"
          />
        </div>
      ))}
    </div>
  );
} */
