import { useState, useEffect } from "react";
import Image from "next/image";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./bookcover.module.css";

export default function BookCover({ height }) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const imageName = "imageE.jpg";

  useEffect(() => {
    async function fetchImageSize() {
      const res = await fetch(`/api/image-size?id=${imageName}`);
      const data = await res.json();
      setDimensions(data);
    }

    fetchImageSize();
  }, []);

  //Bestimmung der relativen Seitenverhältnisse des Bildes in abhängigkeit der festgelegten Höhe
  const relativFactor = dimensions.width / dimensions.height;
  const relativHeight = height;
  const relativWidth = relativFactor * relativHeight;

  return (
    <div>
      {dimensions.width && dimensions.height && (
        <Image
          className={styles.img}
          src={`/images/cover/${imageName}`}
          width={relativWidth}
          height={relativHeight}
          alt="Image"
        />
      )}
    </div>
  );
}
