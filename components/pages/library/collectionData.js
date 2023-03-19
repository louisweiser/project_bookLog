import Link from "next/link";

import CoverFromData from "@/components/common/Cover/coverData.js";

import { genreData } from "@/public/data/genre.js";
import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./collection.module.css";

export default function CollectionFromData() {
  let content = [];

  for (let i = 1; i <= 10; i++) {
    content.push(
      <li key={i} className={styles.padding}>
        <Link href={`/library/${bookMetaData[i - 1].slugname}`}>
          <CoverFromData id={i} height={220}></CoverFromData>
        </Link>
      </li>
    );
  }
  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  ));
}
