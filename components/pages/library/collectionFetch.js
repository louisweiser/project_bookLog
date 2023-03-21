import Link from "next/link";

import CoverFromFetch from "@/components/common/Cover/coverFetch.js";

import { ArrowRightSVG } from "@/public/svgs/router.js";

import { bookMetaData } from "@/public/data/bookmeta.js";
import { genreData } from "@/public/data/genre.js";

import styles from "./collection.module.css";

export default function CollectionFromFetch() {
  let content = [];

  content.push(
    bookMetaData.map((objekt) => (
      <li key={objekt.name} className={styles.bookitem}>
        <Link href="">
          <CoverFromFetch imageName={objekt.name}></CoverFromFetch>
        </Link>
      </li>
    ))
  );

  return genreData.map((item, index) => (
    <div key={index}>
      <Link href={`/library/genre/${item}`}>
        <div className={styles.category}>
          <h3 className={styles.text}> {item}</h3>
          {/* <ArrowRightSVG></ArrowRightSVG> */}
        </div>
      </Link>
      <ul className={styles.collection}>{content}</ul>
    </div>
  ));
}
