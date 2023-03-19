import Link from "next/link";

import CoverFromFetch from "@/components/common/Cover/coverFetch.js";

import { bookMetaData } from "@/public/data/bookmeta.js";
import { genreData } from "@/public/data/genre.js";

import styles from "./collection.module.css";

export default function CollectionFromFetch() {
  let content = [];

  content.push(
    bookMetaData.map((objekt) => (
      <li key={objekt.name} className={styles.padding}>
        <Link href="">
          <CoverFromFetch imageName={objekt.name}></CoverFromFetch>
        </Link>
      </li>
    ))
  );

  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  ));
}
