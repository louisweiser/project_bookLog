import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./cover.module.css";

export default function CoverFromFetch({ imageName }) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const height = 220;

  useEffect(() => {
    async function fetchImageSize() {
      const res = await fetch(`/api/image-size?id=${imageName}`);
      const data = await res.json();
      setDimensions(data);
    }

    fetchImageSize();
  });

  //Bestimmung der relativen Seitenverhältnisse des Bildes in abhängigkeit der festgelegten Höhe
  const relativFactor = dimensions.width / dimensions.height;
  const relativHeight = height;
  const relativWidth = relativFactor * relativHeight;

  return (
    <div>
      {dimensions.width && dimensions.height && (
        <Image
          className={styles.image}
          src={`/images/cover/${imageName}`}
          width={relativWidth}
          height={relativHeight}
          alt="Image"
        />
      )}
    </div>
  );
}
