import Link from "next/link";

import CoverFromData from "@/components/common/Cover/coverData.js";

import { genreData } from "@/public/data/genre.js";
import { bookMetaData } from "@/public/data/bookmeta.js";

import { ArrowRightSVG } from "@/public/svgs/router.js";
import styles from "./collection.module.css";

export default function CollectionFromData() {
  let content = [];

  //hier wird die Büchersammlung in Coverfrom erzeugt. Die Dimensionen des Bildes werden dynamisch aus den vorliegenden Daten erzeugt
  for (let i = 1; i <= 10; i++) {
    content.push(
      <li key={i} className={styles.bookitem}>
        <Link href={`/library/book/${bookMetaData[i - 1].slugname}`}>
          <CoverFromData id={i} height={220}></CoverFromData>
        </Link>
      </li>
    );
  }
  return genreData.map((item, index) => (
    <div key={index}>
      <Link href={`/library/genre/${item}`}>
        <div className={styles.category}>
          <h3 className={styles.categorytext}> {item}</h3>
          {/* <ArrowRightSVG></ArrowRightSVG> */}
        </div>
      </Link>
      <ul className={styles.collection}>{content}</ul>
    </div>
  ));
}
